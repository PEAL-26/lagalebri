import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { InputTextProps } from './types';

export function InputText(props: InputTextProps) {
  const { label, ...rest } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholderTextColor="#929292" {...rest} />
    </View>
  );
}
