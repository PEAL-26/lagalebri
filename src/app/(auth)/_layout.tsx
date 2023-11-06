import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Header, Container } from '@/components/shared/auth';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Header />
      <Container>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />
      </Container>
    </View>
  );
}
