import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { TopButtons } from './top-buttons';
import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Image1 } from '@/assets/images';

export function HouseDetailsHeader() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.black, 'transparent']} style={styles.gradient}>
        <TopButtons />
      </LinearGradient>
      <Image source={Image1} style={styles.image} />
    </View>
  );
}
