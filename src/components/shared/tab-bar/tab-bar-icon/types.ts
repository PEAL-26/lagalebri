import { ElementType } from 'react';
import { SvgProps } from 'react-native-svg';

export type TabBarIconName = 'Home' | 'Explorar' | 'Config';

export interface TabBarIconProps {
  name: TabBarIconName;
  focused: boolean;
  color: string;
  size: number;
  icon: ElementType<SvgProps>;
}
