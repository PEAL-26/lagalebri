import { StyleProp, ViewStyle } from 'react-native';
import { ScrollViewProps as RNScrollViewProps } from 'react-native';

export interface ScrollViewProps extends RNScrollViewProps {
  styleView?: StyleProp<ViewStyle>;
}
