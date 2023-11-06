import { Text, View } from 'react-native';
import { styles } from './styles';

export function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição</Text>
      <Text style={styles.description}>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look li.
      </Text>
    </View>
  );
}
