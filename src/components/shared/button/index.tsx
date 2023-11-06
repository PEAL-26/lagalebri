import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import { getStyles } from './styles';

export function Button(props: ButtonProps) {
  const {
    text,
    variant = 'none',
    type = 'none',
    align = 'center',
    style,
    styleText,
    icon: Icon,
    iconProps,
    ...rest
  } = props;

  const styles = getStyles({ variant, type, align });

  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {Icon && <Icon width={12} height={12} {...iconProps} />}
      {text && <Text style={[styles.text, styleText]}>{text} </Text>}
    </TouchableOpacity>
  );
}
