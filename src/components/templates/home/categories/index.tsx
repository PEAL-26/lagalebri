import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@/components/shared/button';
import { AppIcon } from '@/assets/icons';

import { styles } from './styles';
import { CategoriesMain } from './main';

export function HeaderCategories() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <CategoriesMain />
        <Button
          type="square"
          text="Todas Categorias"
          variant="default"
          style={styles.buttonAllCategoriesContainer}
          styleText={styles.buttonAllCategoriesText}
          icon={AppIcon}
        />
      </View>
    </View>
  );
}
