import { colors } from '@/styles/colors';
import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary.DEFAULT} animating />
    </View>
  );
}