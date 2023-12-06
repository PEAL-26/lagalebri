import { Injectable } from '@nestjs/common';

import { ListAllPropertyUseCaseInput } from './interfaces/list-all-property-types';
import { PropertyRepositoryQueryAbstraction } from '../../abstractions';

@Injectable()
export class ListAllPropertyUseCase {
  constructor(private query: PropertyRepositoryQueryAbstraction) {}

  async execute(input: ListAllPropertyUseCaseInput) {
    const { category, page, query, size } = input;
    return this.query.list({ category, page, query, size });
  }
}
