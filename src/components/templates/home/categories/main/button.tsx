import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/shared/button';

import { CategoriesMainButtonProps } from './types';

export function CategoriesMainButton(props: CategoriesMainButtonProps) {
  const { icon, text } = props;

  return (
    <View style={styles.buttonContainer}>
      <Button
        type="circle"
        variant="default"
        icon={icon}
        iconProps={{ width: 20, height: 20 }}
        style={{ backgroundColor: '#EEEEEE', padding: 12 }}
      />
      <Text style={styles.buttonText} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
}
