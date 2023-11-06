import { ElementType, ReactNode } from 'react';
import { StyleProp , ViewStyle} from 'react-native';
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
  tabBarStyle?:  StyleProp<ViewStyle>;
}
