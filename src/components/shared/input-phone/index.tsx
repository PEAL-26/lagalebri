import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { SmartphoneIcon } from '@/assets/icons';
import { InputPhoneProps } from './types';
import { colors } from '@/styles/colors';

export function InputPhone(props: InputPhoneProps) {
  const { label, value = '', onChangeText } = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <SmartphoneIcon style={styles.icon} color={colors.black} />
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          placeholderTextColor="#929292"
          placeholder="900 000 000"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
