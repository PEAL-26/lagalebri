import { PaginationInput } from '@/helpers/pagination/types';

export interface ListQuery extends PaginationInput {
  query?: string;
}
