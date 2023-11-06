import { useCallback } from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

interface UseLoadingAppProps {
  splashScreenHideAsync(): Promise<boolean>;
}

export function useLoadingApp(props: UseLoadingAppProps) {
  const { splashScreenHideAsync } = props;

  const [hasLoadedFonts, fontsError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (hasLoadedFonts || fontsError) {
      await splashScreenHideAsync();
    }
  }, [hasLoadedFonts, fontsError]);

  return { hasLoadedFonts, fontsError, onLayoutRootView };
}
