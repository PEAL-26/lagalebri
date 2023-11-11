interface Contact {
  userId?: string;
  type: string;
  contact: string;
}

interface Compartment {
  name: string;
  quantity: number;
}

export interface CreatePropertyUseCaseInput {
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  area?: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  categories: string[];
  compartments?: Compartment[];
  contacts?: Contact[];
}
