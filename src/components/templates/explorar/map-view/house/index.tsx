import { useState } from 'react';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/styles/colors';
import { Loading } from '@/components/shared/loading';
import { HouseListType } from '@/services/house-service';
import { LocateFixedIcon, MapPinIcon, StarIcon } from '@/assets/icons';

import { styles } from './styles';
import { MapViewHouseInfoProps } from './types';

export function MapViewHouseInfo(props: MapViewHouseInfoProps) {
  const { show, id } = props;
  const [isLoading, setIsLoading] = useState(false);

  const data: HouseListType = {
    title: 'titulo vghfghfgjgyj fthfghygj fhfgjghj',
    price: '12',
    distance: 2,
    address:
      'Localização fghfgh thftgj fhfgyj fsdfsrg drgd rg rd gd r gdr g dr g rg erg erh  tg hft gnf gh nf tn f th ft g',
    rating: 1,
    views: '12',
  } as HouseListType;

  const goToDetails = () => {
    // router.push(`/(tabs)/explorar/${id}`);
    router.push(`/(tabs)/explorar/kfhkdhfkdhfukhfgk`);
    console.log({ id });
  };

  return (
    <TouchableOpacity style={styles.main} onPress={goToDetails}>
      <View style={styles.container}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Image
              source={{
                uri: data.imageUrl,
              }}
              style={styles.image}
            />
            <View style={styles.containerInfo}>
              <View style={styles.groupBetween}>
                <Text style={styles.infoTitle} numberOfLines={1}>
                  {data.title}
                </Text>
                <Text style={styles.infoPrice}>{`${data.price}`}</Text>
              </View>
              <View style={styles.infoLocationContainer}>
                {/* address and distance */}
                <View style={[styles.groupBetween, { flex: 1 }]}>
                  <View style={[styles.iconDescription, { flex: 1 }]}>
                    <MapPinIcon />
                    <Text style={styles.infoLocation} numberOfLines={1}>
                      {data.address}
                    </Text>
                  </View>
                  <View style={styles.iconDescription}>
                    <LocateFixedIcon width={16} height={16} color={colors.black} />
                    <Text style={styles.infoDistance}>{`${data.distance} M`}</Text>
                  </View>
                </View>

                {/* rating and views */}
                <View style={styles.iconDescription}>
                  <StarIcon color={colors.black} />
                  <Text style={styles.infoRating}>
                    {`${data.rating} Avaliação `}
                    <Text style={styles.infoViews} numberOfLines={1}>
                      {`(${data.views} Visualizações)`}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
