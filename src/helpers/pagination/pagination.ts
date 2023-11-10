import {
  PaginationDataInput,
  PaginationDataOutput,
  PaginationInput,
} from './types';

const LIMIT_DEFAULT = 10;
const NO_PAGE = 0;
export function setPagination(input: PaginationInput) {
  const limit = input?.size ? +input.size : LIMIT_DEFAULT;
  const offset = input?.page ? (input.page - 1) * limit : NO_PAGE;

  return { limit, offset };
}

const FIRST_PAGE = 1;
export function paginationData<T>(
  input: PaginationDataInput<T>,
): PaginationDataOutput<T> {
  const { rows: data, total, limit, page } = input;

  const currentPage = page ? +page : FIRST_PAGE;
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total_items: total,
    total_pages: totalPages,
    current_page: currentPage,
    prev: currentPage > FIRST_PAGE ? currentPage - 1 : null,
    next: currentPage < totalPages ? currentPage + 1 : null,
  };
}
