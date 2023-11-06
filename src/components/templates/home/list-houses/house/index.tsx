import { useRouter } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

import { Image1 } from '@/assets/images';

import { styles } from './styles';
import { HouseInfo } from './info';
import { HouseProps } from './types';
import { HouseDistance } from './distance';

export function House(props: HouseProps) {
  const route = useRouter();
  const { data } = props;

  const {
    id = '',
    title = '',
    price = '',
    distance = 0,
    address = '',
    rating = 0,
    views = '0',
    imageUrl = '',
  } = data || {};

  const goToHouseDetails = () => {
    route.push(`/explorar/${id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToHouseDetails}>
      <HouseDistance value={distance} />
      <HouseInfo title={title} price={price} address={address} rating={rating} views={views} />
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
