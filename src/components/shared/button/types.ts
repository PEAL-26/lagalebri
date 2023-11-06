import { ElementType } from 'react';
import { StyleProp, TouchableOpacityProps, TextStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ButtonTypes = 'circle' | 'square' | 'none';
export type ButtonVariantTypes = 'default' | 'primary' | 'outline' | 'none';
export type ButtonAlignTypes = 'center' | 'left' | 'right';

export interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonTypes;
  variant?: ButtonVariantTypes;
  text?: string;
  styleText?: StyleProp<TextStyle>;
  align?: ButtonAlignTypes;
  icon?: ElementType<SvgProps>;
  iconProps?: SvgProps;
}

export interface GetStylesProps {
  type?: ButtonTypes;
  variant?: ButtonVariantTypes;
  align?: ButtonAlignTypes;
}
