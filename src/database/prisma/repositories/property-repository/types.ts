import { QueryProps } from '@/shared/query';

export interface ListQuery extends QueryProps {
  category?: string;
}

export interface PropertyListData {
  id: string;
  title: string;
  slug: string;
  price: number;
  image_url: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  views: number;
}
