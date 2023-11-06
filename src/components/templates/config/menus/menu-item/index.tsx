import { Text, TouchableOpacity, View } from 'react-native';
import { MenuItemProps } from './types';
import { styles } from './styles';
import { ArrowRightIcon } from '@/assets/icons';
import { colors } from '@/styles/colors';

export function MenuItem(props: MenuItemProps) {
  const { title, icon: Icon, border = true, onPress, toggle } = props;

  return (
    <View
      style={{
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: border ? 1 : 0,
      }}
    >
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.titleContainer}>
          <Icon width={18} height={18} color={colors.black} />
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View>{toggle ? toggle : <ArrowRightIcon />}</View>
      </TouchableOpacity>
    </View>
  );
}
