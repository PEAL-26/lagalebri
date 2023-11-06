import { Text, View } from 'react-native';
import { styles } from './styles';
import { LocateFixedIcon } from '@/assets/icons';
import { colors } from '@/styles/colors';

export function HouseDistance({ value }: { value: number }) {
  return (
    <View style={styles.containerDistance}>
      <LocateFixedIcon width={22} height={22} strokeWidth={1.5} color={colors.primary.DEFAULT} />
      <Text style={styles.textDistance}>{`${value} M`}</Text>
    </View>
  );
}
