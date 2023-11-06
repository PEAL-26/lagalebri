import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native';

import { colors } from '@/styles/colors';
import { Loading } from '@/components/shared/loading';
import { HouseListType, getById } from '@/services/house-service';
import { LocateFixedIcon, MapPinIcon, StarIcon } from '@/assets/icons';

import { styles } from './styles';
import { MapViewHouseInfoProps } from './types';

export function MapViewHouseInfo(props: MapViewHouseInfoProps) {
  const { show, id } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  // Queries
  const { data, isLoading, isError } = useQuery({
    queryKey: ['house'],
    queryFn: () => getById(id),
  });

  useEffect(() => {
    show ? fadeIn() : fadeOut();
  }, [show]);

  const goToDetails = () => {
    router.push(`/(tabs)/explorar/${id}`);
  };

  return (
    <TouchableOpacity style={styles.main} onPress={goToDetails}>
      <View style={styles.container}>
        {isLoading && <Loading />}
        {isError && <Text>Erro ao carregar!</Text>}
        {!isLoading && !isError && (
          <>
            <Image
              source={{
                uri: data?.imageUrl,
              }}
              style={styles.image}
            />
            <View style={styles.containerInfo}>
              {/* title and price */}
              <View style={styles.groupBetween}>
                <Text style={styles.infoTitle} numberOfLines={1}>
                  {data?.title}
                </Text>
                <Text style={styles.infoPrice}>{`${data?.price}`}</Text>
              </View>
              <View style={styles.infoLocationContainer}>
                {/* address and distance */}
                <View style={[styles.groupBetween, { flex: 1 }]}>
                  <View style={[styles.iconDescription, { flex: 1 }]}>
                    <MapPinIcon />
                    <Text style={styles.infoLocation} numberOfLines={1}>
                      {data?.address}
                    </Text>
                  </View>
                  <View style={styles.iconDescription}>
                    <LocateFixedIcon width={16} height={16} color={colors.black} />
                    <Text style={styles.infoDistance}>{`${data?.distance} M`}</Text>
                  </View>
                </View>

                {/* rating and views */}
                <View style={styles.iconDescription}>
                  <StarIcon color={colors.black} />
                  <Text style={styles.infoRating}>
                    {`${data?.rating} Avaliação `}
                    <Text style={styles.infoViews} numberOfLines={1}>
                      {`(${data?.views} Visualizações)`}
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
