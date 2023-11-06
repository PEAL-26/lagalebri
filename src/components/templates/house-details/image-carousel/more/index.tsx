import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MoreProps } from './types';

export function More(props: MoreProps) {
  const { count, loading } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.count}>{`${count} +`}</Text>
    </TouchableOpacity>
  );
}
