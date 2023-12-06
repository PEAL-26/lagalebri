import { Injectable } from '@nestjs/common';

import { PropertyRepositoryQueryAbstraction } from '../../abstractions';
import { NotFoundError } from '@/helpers/errors';

@Injectable()
export class GetsPropertyUseCase {
  constructor(private query: PropertyRepositoryQueryAbstraction) {}

  async byId(id: string) {
    const property = await this.query.getById(id);
    if (!property) throw new NotFoundError('Propriedade');

    return property;
  }

  async bySlug(slug: string) {
    const property = await this.query.getBySlug(slug);
    if (!property) throw new NotFoundError('Propriedade');

    return property;
  }
}
