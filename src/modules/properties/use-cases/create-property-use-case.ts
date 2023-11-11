import { Injectable } from '@nestjs/common';

import {
  PropertyCommandsRepository,
  PropertyQueriesRepository,
} from '@/database/prisma/repositories/property-repository';
import { Property } from '@/domain/entities/property';

import { createSlug } from '@/helpers/slug';
import { ExistError } from '@/helpers/errors';
import { toSnakeCase } from '@/helpers/converter-property-case';
import { NotificationError } from '@/helpers/notification-error';

import { CreatePropertyUseCaseInput } from './interfaces/create-property-types';

@Injectable()
export class CreatePropertyUseCase {
  constructor(
    private propertyCommandsRepository: PropertyCommandsRepository,
    private propertyQueriesRepository: PropertyQueriesRepository,
  ) {}

  async execute(input: CreatePropertyUseCaseInput) {
    const {
      title,
      description,
      price,
      imageUrl,
      area,
      address,
      latitude,
      longitude,
      categories,
      compartments,
      contacts,
    } = input;

    const property = new Property({
      title,
      price,
      description,
      imageUrl,
      area,
      address,
      latitude,
      longitude,
    });

    categories.forEach((name) => property.addCategory({ name }));
    compartments.forEach((compartment) => property.addCompartment(compartment));
    contacts.forEach((contact) => property.addContact(contact));

    const slug = await this.verifySlug(title);

    this.validationOnCreate(property);

    const response = await this.propertyCommandsRepository.create({
      id: property.id,
      slug,
      title: property.title,
      description: property.description,
      price: property.price,
      imageUrl: property.imageUrl,
      area: property.area,
      address: property.address,
      latitude: property.latitude,
      longitude: property.longitude,
    });

    return { property: toSnakeCase(response) };
  }

  private async validationOnCreate(property: Property) {
    if (!property.isValid) throw new NotificationError(property.notifications);

    // const propertyExists = await this.propertyQueriesRepository.getByTitle(
    //   property.title,
    // );

    // if (propertyExists)
    //   throw new NotificationError({ message: 'Titulo já existe', property: 'title' });

    return property;
  }

  private async verifySlug(title: string) {
    const slug = createSlug(title);
    let counter = 1;

    let newSlug = slug;
    while (true) {
      const property = await this.propertyQueriesRepository.getBySlug(newSlug);

      if (!property) return newSlug;

      newSlug = `${slug}-${counter++}`;
    }
  }
}
