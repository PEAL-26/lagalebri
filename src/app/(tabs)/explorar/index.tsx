import { ExplorarHeader, MapView } from '@/components/templates/explorar';
import { View } from 'react-native';

export default function ExplorarScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ExplorarHeader />
      <MapView />
    </View>
  );
}
