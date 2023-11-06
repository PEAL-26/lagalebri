import { Text, View } from 'react-native';
import { styles } from './styles';
import { MapPinIcon, StarIcon } from '@/assets/icons';
import { colors } from '@/styles/colors';
import { HouseInfProps } from './types';

export function HouseInfo(data: HouseInfProps) {
  return (
    <View style={styles.containerInfo}>
      <View style={styles.infoTitleContainer}>
        <Text style={styles.infoTitle} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.infoPrice}>{`${data.price}`}</Text>
      </View>
      <View style={styles.infoLocationContainer}>
        <View style={styles.icon}>
          <MapPinIcon />
          <Text style={styles.infoLocation} numberOfLines={1}>
            {data.address}
          </Text>
        </View>
        <View style={styles.icon}>
          <StarIcon color={colors.black} />
          <Text style={styles.infoRating}>
            {`${data.rating} Avaliação`}
            <Text style={styles.infoViews} numberOfLines={1}>
              {`(${data.views} Visualizações)`}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
