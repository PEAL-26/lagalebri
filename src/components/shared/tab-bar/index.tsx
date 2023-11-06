import { TabBarIcon, TabBarIconName } from './tab-bar-icon';
import { TabScreenOptionsOutput, TabBarIconType, IconType } from './types';

export const getTabScreenOptions = (
  title: TabBarIconName,
  icon: IconType,
  hide = false,
): TabScreenOptionsOutput => ({
  title,
  tabBarIcon: ({ focused, color, size }: TabBarIconType) => (
    <TabBarIcon name={title} focused={focused} color={color} size={size} icon={icon} />
  ),
  tabBarStyle: {
    display: hide ? 'none' : 'flex',
    backgroundColor: 'white',
    height: 64,
  },
});
