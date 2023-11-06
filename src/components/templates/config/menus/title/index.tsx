import { Text } from 'react-native';
import { MenusTitlePops } from './types';
import { styles } from './styles';

export function MenusTitle(props: MenusTitlePops) {
  const { title } = props;

  return <Text style={styles.title}>{title} </Text>;
}
