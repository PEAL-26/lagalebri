import { PaginationInput } from '@/helpers/pagination/types';

export interface CreateRequest {
  name: string;
  description: string;
}

export interface UpdateRequest {
  name: string;
  description: string;
}

export interface ListQuery extends PaginationInput {
  query?: string;
}
