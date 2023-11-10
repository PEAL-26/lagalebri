export interface PaginationInput {
  page?: number;
  size?: number;
}

export interface PaginationDataInput<T> {
  rows: T[];
  total: number;
  limit: number;
  page?: number;
}

export interface PaginationDataOutput<T> {
  data: T[];
  total_items: number;
  total_pages: number;
  current_page: number;
  prev: number | null;
  next: number | null;
}
