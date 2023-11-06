import { View } from 'react-native';
import { styles } from './styles';
import { CategoriesMainButton } from './button';
import { HouseIcon, LandIcon, PlaceIcon, StoreIcon } from '@/assets/icons';

export function CategoriesMain() {
  return (
    <View style={styles.container}>
      <CategoriesMainButton text="Casa" icon={HouseIcon} />
      <CategoriesMainButton text="Apartamento" icon={PlaceIcon} />
      <CategoriesMainButton text="Loja" icon={StoreIcon} />
      <CategoriesMainButton text="Terreno" icon={() => <LandIcon width={25.61} height={24} />} />
    </View>
  );
}
