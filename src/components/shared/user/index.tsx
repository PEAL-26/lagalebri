import { UserIcon } from '@/assets/icons';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { HeaderUserProps } from './types';

export function HeaderUser(props: HeaderUserProps) {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <UserIcon />
    </TouchableOpacity>
  );
}
