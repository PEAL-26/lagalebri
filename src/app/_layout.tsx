import { Slot } from 'expo-router';
import { View } from 'react-native';
import {
  preventAutoHideAsync as splashScreenPreventAutoHideAsync,
  hideAsync as splashScreenHideAsync,
} from 'expo-splash-screen';

import { Providers } from '@/providers';
import { useLoadingApp } from '@/hooks/use-loading-app';

splashScreenPreventAutoHideAsync();
export default function RootLayout() {
  const { hasLoadedFonts, fontsError, onLayoutRootView } = useLoadingApp({
    splashScreenHideAsync,
  });

  if (!hasLoadedFonts && !fontsError) {
    return null;
  }

  return (
    <Providers>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Slot screenOptions={{ headerShown: false }} />
      </View>
    </Providers>
  );
}
