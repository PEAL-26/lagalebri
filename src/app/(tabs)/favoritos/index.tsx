import { Header } from '@/components/shared/header';
import { Text, View } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Favoritos" />
      <View
        style={{
          flex: 1,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Em Desenvolvimento!</Text>
      </View>
    </View>
  );
}
