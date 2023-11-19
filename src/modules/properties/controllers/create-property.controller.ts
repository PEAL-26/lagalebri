import { VerifyError } from '@/helpers/errors';
import { Controller, Post, Body } from '@nestjs/common';

import { PropertyCreateBody } from './dtos/create-property-dto';
import { CreatePropertyUseCase } from '@/domain/use-cases/properties/create-property-use-case';
import { toCamelCase } from '@/helpers/converter-property-case';

@Controller('properties')
export class CreatePropertyController {
  constructor(private create: CreatePropertyUseCase) {}

  @Post()
  async handle(@Body() body: PropertyCreateBody) {
    try {
      const {
        title,
        user_id: userId,
        description = '',
        price,
        image_url: imageUrl = '',
        area,
        address,
        latitude,
        longitude,
        categories = [],
        compartments = [],
        contacts = [],
      } = body;

      const { property } = await this.create.execute({
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
        contacts: contacts?.map((contact) => toCamelCase(contact)),
      });

      return property;
    } catch (error) {
      VerifyError(error);
    }
  }
}
