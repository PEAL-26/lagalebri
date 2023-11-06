import { ElementType, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';

export type TabBarIconType = {
  focused: boolean;
  color: string;
  size: number;
};

export type IconType = ElementType<SvgProps>;

export interface TabScreenOptionsOutput {
  title?: string | undefined;
  tabBarIcon?: (props: TabBarIconType) => ReactNode;
  tabBarStyle?: { display: 'none' | 'flex' };
}
