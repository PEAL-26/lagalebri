import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../button';
import { HeaderProps } from './types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from '@/assets/icons';
import { colors } from '@/styles/colors';

export function Header(props: HeaderProps) {
  const { title } = props;

  const route = useRouter();
  const { top: paddingTop } = useSafeAreaInsets();
  const top = paddingTop + 12;

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Button
        style={{ width: 12, height: 16 }}
        onPress={route.back}
        icon={() => <ArrowLeftIcon color={colors.black} />}
      />
      <View style={[styles.titleContainer, { top }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
