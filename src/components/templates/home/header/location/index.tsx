import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { ArrowDownIcon, MapPinnedIcon } from '@/assets/icons';
import { useLocation } from '@/hooks/use-location';

export function HeaderLocation() {
  const { isLoading, location, errorMsg } = useLocation();

  console.log(isLoading, location, errorMsg);
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
