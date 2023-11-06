import { View } from 'react-native';
import { styles } from './styles';
import { House } from './house';
import { HouseListType } from '@/services/house-service';

export function ListHouses() {
  const data: HouseListType[] = [];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <House key={item.id} data={item} />
      ))}
    </View>
  );
}
