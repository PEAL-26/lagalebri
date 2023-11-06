import { Tabs, useRouter, useSegments } from 'expo-router';

import { colors } from '@/styles/colors';
import { ConfigIcon, HomeIcon, MapIcon } from '@/assets/icons';
import { getTabScreenOptions } from '@/components/shared/tab-bar';

export default function TabsLayout() {
  const segments = useSegments();
  const route = useRouter();

  const hideTab = segments[0] === '(tabs)' && segments[1] === 'explorar' && segments[2] === '[id]';

  return (
    <Tabs
      initialRouteName="(tabs)/(home)/index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary.DEFAULT,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: { display: hideTab ? 'none' : 'flex' },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={getTabScreenOptions('Home', HomeIcon, hideTab)}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();

            route.push('/(tabs)/(home)');
          },
        })}
      />
      <Tabs.Screen
        name="explorar"
        options={getTabScreenOptions('Explorar', MapIcon, hideTab)}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            route.push('/(tabs)/explorar');
          },
        })}
      />
      <Tabs.Screen
        name="config"
        options={getTabScreenOptions('Config', ConfigIcon, hideTab)}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            route.push('/(tabs)/config');
          },
        })}
      />
    </Tabs>
  );
}
