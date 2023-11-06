import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';
import { InputSearch } from './input-search';
import { Button } from '@/components/shared/button';

export function ExplorarHeader() {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: paddingTop + 32 }]}>
      <InputSearch />
      <Button text="Pesquisar" variant="primary" type="circle" style={{ paddingVertical: 11 }} />
    </View>
  );
}
