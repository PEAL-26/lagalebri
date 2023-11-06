import { ElementType, ReactElement, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';

export interface MenuItemProps {
  title: string;
  icon: ElementType<SvgProps>;
  border?: boolean;
  onPress?(): void;
  toggle?: ReactNode;
}
