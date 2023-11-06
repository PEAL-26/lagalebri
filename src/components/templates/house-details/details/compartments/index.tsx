import { View } from 'react-native';

import { ArmchairIcon, BathroomIcon, BedIcon, FreezerIcon } from '@/assets/icons';
import { styles } from './styles';
import { CompartmentsItem } from './item';

export function Compartments() {
  return (
    <View style={styles.container}>
      <CompartmentsItem title="Sala" number={1} icon={ArmchairIcon} />
      <CompartmentsItem title="Quarto" number={4} icon={BedIcon} />
      <CompartmentsItem title="W.C" number={2} icon={BathroomIcon} />
      <CompartmentsItem title="Cozinha" number={1} icon={FreezerIcon} />
    </View>
  );
}
