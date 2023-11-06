import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ArrowDownIcon, MapPinnedIcon } from '@/assets/icons';

export function HeaderLocation() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLocation}>Sua localização</Text>
      <TouchableOpacity style={styles.addressContainer}>
        <MapPinnedIcon />
        <Text style={styles.addressText} numberOfLines={1}>
          Angola, Luanda, Viana
        </Text>
        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
}
