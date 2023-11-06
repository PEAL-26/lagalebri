import React from 'react';
import { Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { MapViewMarkerProps } from './types';

export function MapViewMarker(props: MapViewMarkerProps) {
  const { price, ...rest } = props;

  return (
    <Marker {...rest}>
      <View>
        <TouchableOpacity style={styles.main}>
          <View style={styles.container} />
          <View style={styles.arrow} />
          <Text style={styles.label}>{price}</Text>
        </TouchableOpacity>
      </View>
    </Marker>
  );
}
