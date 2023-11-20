import { appConfig } from '@/configs/app-config';

interface QueryProps {
  query?: string;
  size?: number;
  page?: number;
}

export async function getAllPropertiesService(query?: QueryProps) {
  return fetch(`${appConfig.api}/properties`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
}
