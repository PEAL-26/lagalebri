class Contact {
  user_id: string;
  type: string;
  contact: string;
}

class Compartment {
  name: string;
  quantity: number;
}

export class PropertyCreateBody {
  title: string;
  description?: string;
  price: number;
  image_url?: string;
  area?: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  categories: string[];
  compartments?: Compartment[];
  contacts?: Contact[];
}
