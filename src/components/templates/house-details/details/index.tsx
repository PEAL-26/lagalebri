import { Text, View } from 'react-native';
import { LocateFixedIcon, MapPinIcon, StarIcon } from '@/assets/icons';

import { Compartments } from './compartments';
import { Description } from './description';

import { styles } from './styles';
import { colors } from '@/styles/colors';

export function HouseDetails() {
  return (
    <View style={styles.container}>
      {/* Title and Price*/}
      <View style={styles.infoTitleContainer}>
        <Text style={styles.infoTitle}>Residência em Alturas Reais</Text>
        <Text style={styles.infoPrice}>100K Kz</Text>
      </View>

      {/* Location and Rating */}
      <View style={styles.infoLocationRatingContainer}>
        <View style={styles.infoLocationContainer}>
          <View style={[styles.iconDescription, { alignItems: 'flex-start' }]}>
            <MapPinIcon style={{ marginTop: 2 }} />
            <Text style={styles.infoLocationText}>
              Angola, Luanda, Viana, Zango, muito mais muito longo mesmo
            </Text>
          </View>
          <View style={styles.iconDescription}>
            <LocateFixedIcon width={18} height={18} color={colors.black} />
            <Text style={styles.infoLocationText}>800 M</Text>
          </View>
        </View>
        <View style={styles.iconDescription}>
          <StarIcon color={colors.black} />
          <Text style={styles.infoRating}>
            4.8 Avaliação
            <Text style={styles.infoViews} numberOfLines={1}>
              {` (156 Visualizações)`}
            </Text>
          </Text>
        </View>
      </View>

      {/* Compartments */}
      <Compartments />

      {/* Description */}
      <Description />
    </View>
  );
}
