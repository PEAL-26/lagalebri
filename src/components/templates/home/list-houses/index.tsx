import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { HouseListType, listAll } from '@/services/house-service';

import { House } from './house';
import { styles } from './styles';
import { useEffect, useState } from 'react';

export function ListHouses() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['houses'],
  //   queryFn: async () => listAll({}),
  // });

  const [data, setData] = useState<HouseListType[]>([]);

  useEffect(() => {
    listAll({}).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <House key={item.id} data={item} />
      ))}
    </View>
  );
}
