import { View } from 'react-native';
import { ContainerProps } from './types';
import { styles } from './styles';
import { ScrollView } from '../../scroll-view';

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ScrollView styleView={styles.scrollView}>{children}</ScrollView>
      </View>
    </View>
  );
}
