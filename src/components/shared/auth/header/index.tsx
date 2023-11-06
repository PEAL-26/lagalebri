import { Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/styles/colors';
import { HouseSearching, Image1 } from '@/assets/images';
import { styles } from './styles';

export function Header() {
  const { top: marginTop } = useSafeAreaInsets();
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <LinearGradient colors={[colors.black, 'transparent']} style={styles.gradient}>
          <Text style={[styles.title, { marginTop: marginTop + 28 }]}>Lagalebri</Text>
          <Text style={styles.description}>ENCONTRE A CASA DOS SEUS SONHOS</Text>
        </LinearGradient>
        <Image source={HouseSearching} style={styles.image} />
      </View>
    </View>
  );
}
