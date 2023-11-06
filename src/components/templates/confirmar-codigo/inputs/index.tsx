import { View } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';

export function Inputs() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#929292"
            placeholder="0"
            numberOfLines={1}
            keyboardType="numeric"
            maxLength={1}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            returnKeyType="next"
          />
        </View>
      ))}
    </View>
  );
}
