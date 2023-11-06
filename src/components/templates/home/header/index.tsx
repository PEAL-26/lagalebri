import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderUser } from '@/components/shared/user';

import { styles } from './styles';
import { HeaderLocation } from './location';
import { HeaderNotification } from './notification';
import { router } from 'expo-router';

export function HomeHeader() {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: paddingTop + 32 }]}>
      <HeaderUser onPress={() => router.push('/login')} />
      <HeaderLocation />
      <HeaderNotification onPress={() => router.push('/notificacoes/')} />
    </View>
  );
}
