import { Injectable } from '@nestjs/common';

import { ListForMapPropertyUseCaseInput } from './interfaces/list-for-map-property-types';
import { PropertyRepositoryQueryAbstraction } from '../../abstractions';

@Injectable()
export class ListForMapPropertyUseCase {
  constructor(private query: PropertyRepositoryQueryAbstraction) {}

  async execute(input: ListForMapPropertyUseCaseInput) {
    const { page, query, size } = input;
    return this.query.listForMap({ page, query, size });
  }
}
