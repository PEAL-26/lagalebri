import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/shared/button';
import { EqualizeIcon, SearchIcon } from '@/assets/icons';

export function InputSearch() {
  return (
    <View style={styles.container}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholderTextColor="#929292"
        placeholder="O que você procura?"
      />
      <Button type="circle" variant="default" icon={EqualizeIcon} style={styles.button} />
    </View>
  );
}
