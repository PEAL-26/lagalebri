import { View } from 'react-native';
import { ImageItem } from './image';
import { useState } from 'react';
import { More } from './more';
import { styles } from './styles';
import { ScrollView } from '@/components/shared/scroll-view';

export function ImageCarousel() {
  const [images, setImage] = useState([1, 2, 3, 5, 6]);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal styleView={styles.container}>
      {images.map((data, key) => (
        <ImageItem key={key} data={data} />
      ))}
      <More count={10} />
    </ScrollView>
  );
}
