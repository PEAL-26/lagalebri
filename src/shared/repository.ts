import { PaginationDataOutput } from '@/helpers/pagination';
import { QueryProps } from './query';

export abstract class RepositoryCommand<T> {
  abstract create(entity: T): Promise<T>;
  abstract update(id: string, entity: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
}

export abstract class RepositoryQuery<T> {
  abstract getById(id: string): Promise<T | null>;
  abstract list(query?: QueryProps): Promise<PaginationDataOutput<T>>;
}
