import { Injectable } from '@nestjs/common';

import { PropertyQueriesRepository } from '@/database/prisma/repositories/property-repository';
import { ListAllPropertyUseCaseInput } from './interfaces/list-all-property-types';

@Injectable()
export class ListAllPropertyUseCase {
  constructor(private query: PropertyQueriesRepository) {}

  async execute(input: ListAllPropertyUseCaseInput) {
    const { category, page, query, size } = input;
    const properties = await this.query.list({ category, page, query, size });
    return { properties };
  }
}
