import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { listAll } from '@/services/house-service';

import { House } from './house';
import { styles } from './styles';

export function ListHouses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['houses'],
    queryFn: async () => listAll({}),
  });

  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <House key={item.id} data={item} />
      ))}
    </View>
  );
}
