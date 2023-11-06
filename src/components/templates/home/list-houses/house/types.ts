import { HouseListType } from '@/services/house-service';

export interface HouseProps {
  data?: HouseListType;
}

export interface HouseInfProps {
  title: string;
  address: string;
  rating: number;
  views: string;
  price: string;
}
