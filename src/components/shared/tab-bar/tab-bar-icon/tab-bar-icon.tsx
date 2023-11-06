import { Text, View } from 'react-native';

import { TabBarIconProps } from './types';
import { styles } from './styles';

export function TabBarIcon(props: TabBarIconProps) {
  const { name, focused, color, size, icon: Icon } = props;

  return (
    <View style={styles.container}>
      <Icon width={size} height={size} color={color} stroke={color} />
      <Text style={[styles.text, { color }]}>{name}</Text>
    </View>
  );
}
