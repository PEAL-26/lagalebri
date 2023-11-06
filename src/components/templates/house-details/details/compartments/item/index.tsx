import { Text, View } from 'react-native';
import { CompartmentsItemProps } from './types';
import { styles } from './styles';

export function CompartmentsItem(props: CompartmentsItemProps) {
  const { title, number, icon: Icon } = props;
  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.title}>{`${number} ${title}`}</Text>
    </View>
  );
}
