// import '@/styles/react-native-web-mapview.css';
// import RNMapView, { Marker } from '@alamoweb/react-native-web-mapview';

import { useState } from 'react';
import { View } from 'react-native';
import RNMapView from 'react-native-maps';
import { Loading } from '@/components/shared/loading';

import { styles } from './styles';
import { MapViewHouseInfo } from './house';

export function MapView() {
  const [id, setId] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loading />;

  return (
    <View style={styles.container}>
      <RNMapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <MapViewHouseInfo show={showInfo} id={id} />
    </View>
  );
}
