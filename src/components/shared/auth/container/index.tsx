import { View } from 'react-native';

import { styles } from './styles';
import { ContainerProps } from './types';
import { ScrollView } from '../../scroll-view';

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <View style={styles.main}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}
