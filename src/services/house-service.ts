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

export type MarkerType = {
  id: string;
  price: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};

type ListQuery = {};

type ListAllQuery = {
  pageParam?: number;
};

export async function listAll(query: ListAllQuery) {
  const { pageParam = 1 } = query;

  return [
    {
      id: '1',
      title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
      price: '12',
      distance: 2,
      address: 'Localização fghfgh thftg',
      rating: 1,
      views: '12',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
      price: '12',
      distance: 2,
      address: 'Localização fghfgh thftg',
      rating: 1,
      views: '12',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: '3',
      title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
      price: '12',
      distance: 2,
      address: 'Localização fghfgh thftg',
      rating: 1,
      views: '12',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: '4',
      title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
      price: '12',
      distance: 2,
      address: 'Localização fghfgh thftg',
      rating: 1,
      views: '12',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];
}

export function listMarkers() {
  return [
    {
      id: '1',
      price: '12',
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: '2',
      price: '12',
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
  ];
}

export function list(query: ListQuery) {}

export function getById(id: string): Promise<HouseListType> {
  return new Promise((resolve) => {
    resolve({
      id,
      title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
      price: '12',
      distance: 2,
      address: 'Localização fghfgh thftg',
      rating: 1,
      views: '12',
      imageUrl: 'https://picsum.photos/200/300',
    });
  });
}
