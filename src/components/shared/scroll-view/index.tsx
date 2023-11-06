import { ScrollView as RNScrollView, View } from 'react-native';
import { styles } from './styles';
import { ScrollViewProps } from './types';

export function ScrollView(props: ScrollViewProps) {
  const { children, styleView, showsVerticalScrollIndicator = false, ...rest } = props;
  return (
    <RNScrollView showsVerticalScrollIndicator={showsVerticalScrollIndicator} {...rest}>
      <View style={[styles.view, styleView]}>{children}</View>
    </RNScrollView>
  );
}
