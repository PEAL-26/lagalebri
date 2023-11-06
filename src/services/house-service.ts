export type HouseListType = {
  id: string;
  title: string;
  price: string;
  distance: number; // Metros
  address: string;
  rating: number;
  views: string;
  imageUrl: string;
};

type ListQuery = {};

type ListAllQuery = {
  pageParam?: number;
};

export function listAll(query: ListAllQuery) {
  const { pageParam = 1 } = query;
}

export function listForMap() {
  // id, price | location:{lat, lng}
  return [];
}

export function list(query: ListQuery) {}

export function getById(id: string) {}
