import { Button } from '@/components/shared/button';
import { ScrollView } from '@/components/shared/scroll-view';
import { View } from 'react-native';
import { styles } from './styles';

export function SuggestionsButtons() {
  return (
    <ScrollView
      style={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
      styleView={styles.container}
    >
      <Button
        text="Redondezas"
        type="circle"
        variant="primary"
        style={{ backgroundColor: '#011621' }}
      />
      <Button text="Recomendações" type="circle" variant="default" />
      <Button text="Populares" type="circle" variant="default" />
    </ScrollView>
  );
}
