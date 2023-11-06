import { Image, View } from 'react-native';
import { ImageProps } from './types';
import { styles } from './styles';
import { Image1 } from '@/assets/images';

export function ImageItem(props: ImageProps) {
  const { data } = props;

  return (
    <View style={styles.container}>
      <Image source={Image1} style={styles.image} />
    </View>
  );
}
