import { ElementType } from 'react';
import { SvgProps } from 'react-native-svg';

export interface CompartmentsItemProps {
  title: string;
  number: number;
  icon: ElementType<SvgProps>;
}
