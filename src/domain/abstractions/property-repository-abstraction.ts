import { Property } from '@/domain/entities/property';
import { PaginationDataOutput } from '@/helpers/pagination';
import { QueryProps } from '@/shared/query';
import { RepositoryCommand, RepositoryQuery } from '@/shared/repository';

export interface ListQuery extends QueryProps {
  category?: string;
}

export abstract class PropertyRepositoryCommandAbstraction extends RepositoryCommand<Property> {}

export abstract class PropertyRepositoryQueryAbstraction extends RepositoryQuery<Property> {
  abstract list(query?: ListQuery): Promise<PaginationDataOutput<any>>;
  abstract listForMap(query?: ListQuery): Promise<PaginationDataOutput<any>>;
  abstract getByTitle(title: string): Promise<Property>;
  abstract getBySlug(slug: string): Promise<Property | null>;
}
