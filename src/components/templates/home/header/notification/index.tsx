import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import { colors } from '@/styles/colors';
import { NotificationIcon } from '@/assets/icons';

import { styles } from '../styles';
import { HeaderNotificationProps } from './types';

export function HeaderNotification({ onPress }: HeaderNotificationProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <NotificationIcon color={colors.black} />
    </TouchableOpacity>
  );
}
