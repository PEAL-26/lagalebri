import { colors } from '@/styles/colors';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { NotificationIcon } from '@/assets/icons';

export function HeaderNotification() {
  return (
    <TouchableOpacity style={styles.button}>
      <NotificationIcon color={colors.black} />
    </TouchableOpacity>
  );
}
