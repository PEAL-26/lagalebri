import { VerifyError } from '@/helpers/errors';
import { Controller, Get, Param } from '@nestjs/common';

import { ListPropertyDto } from './dtos/list-property-dto';
import { ListAllPropertyUseCase } from '../use-cases';

@Controller('properties')
export class ListPropertyController {
  constructor(private listAll: ListAllPropertyUseCase) {}

  @Get()
  async handle(@Param() params: ListPropertyDto) {
    try {
      const { category, q: query, page, size } = params;

      const response = await this.listAll.execute({
        category,
        query,
        page,
        size,
      });

      return response;
    } catch (error) {
      console.log(error)
      VerifyError(error);
    }
  }
}
