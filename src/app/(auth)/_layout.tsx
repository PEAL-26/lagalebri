import { Header, Container } from '@/components/shared/auth';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Header />
      <Container>
        <Stack screenOptions={{ headerShown: false }} />
      </Container>
    </View>
  );
}
