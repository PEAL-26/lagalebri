import { Injectable } from '@nestjs/common';

import { Property } from '@/domain/entities/property';

import { createSlug } from '@/helpers/slug';
import { NotificationError } from '@/helpers/errors';
import { CreatePropertyUseCaseInput } from './interfaces/create-property-types';
import {
  PropertyRepositoryCommandAbstraction,
  PropertyRepositoryQueryAbstraction,
  UserRepositoryQueryAbstraction,
} from '../../abstractions';

@Injectable()
export class CreatePropertyUseCase {
  constructor(
    private propertyCommandsRepository: PropertyRepositoryCommandAbstraction,
    private propertyQueriesRepository: PropertyRepositoryQueryAbstraction,
    private userQueriesRepository: UserRepositoryQueryAbstraction,
  ) {}

  async execute(input: CreatePropertyUseCaseInput) {
    const {
      title,
      userId,
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

    const user = await this.userQueriesRepository.getById(userId);

    if (!user)
      throw new NotificationError({
        property: 'user_id',
        message: 'Usuário não existe.',
      });

    const property = new Property({
      user,
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
    property.slug = await this.verifySlug(title);

    if (!property.isValid) throw new NotificationError(property.notifications);

    console.log(property.user);
    console.log(property.categories);

    await this.propertyCommandsRepository.create(property);

    return { property };
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
