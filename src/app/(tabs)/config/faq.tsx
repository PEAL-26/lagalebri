import { Header } from '@/components/shared/header';
import { Text, View } from 'react-native';

export default function FaqScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="FAQ" />
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
