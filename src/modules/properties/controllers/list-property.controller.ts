import { VerifyError } from '@/helpers/errors';
import { Controller, Get, Query } from '@nestjs/common';

import { ListPropertyDto } from './dtos/list-property-dto';
import { ListAllPropertyUseCase } from '../../../domain/use-cases/properties';
import { Public } from '@/modules/auth/constants';

@Controller('properties')
export class ListPropertyController {
  constructor(private listAll: ListAllPropertyUseCase) {}

  @Get()
  @Public()
  async handle(@Query() params: ListPropertyDto) {
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
      VerifyError(error);
    }
  }
}
