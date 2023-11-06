// import '@/styles/react-native-web-mapview.css';
// import RNMapView, { Marker } from '@alamoweb/react-native-web-mapview';

import { useState } from 'react';
import RNMapView from 'react-native-maps';
import { Text, View, Dimensions } from 'react-native';

import { useLocation } from '@/hooks/use-location';
import { Loading } from '@/components/shared/loading';

import { styles } from './styles';
import { MapViewHouseInfo } from './house';
import { MapViewMarker } from './marker';
import { MarkerType } from '@/services/house-service';

export function MapView() {
  const { isLoading, location, errorMsg } = useLocation();
  const { latitude = 0, longitude = 0 } = location?.coords || {};

  const [id, setId] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [markers, setMarkers] = useState<MarkerType[]>([
    {
      id: '1',
      coordinate: { latitude, longitude },
      price: '2222',
    },
    {
      id: '2',
      coordinate: { latitude: latitude + 1, longitude },
      price: '2222',
    },
    {
      id: '3',
      coordinate: { latitude, longitude: longitude + 1 },
      price: '2222',
    },
  ]);

  const handleMarkerPress = (id: string) => {
    setId(id);
    setShowInfo(true);
  };

  if (isLoading) return <Loading />;
  if (errorMsg)
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text>{errorMsg}</Text>
      </View>
    );

  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 0.0122,
    longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * 0.0122,
  };

  console.log(markers);

  return (
    <View style={styles.container}>
      <RNMapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={() => setShowInfo(false)}
      >
        {markers.map((marker) => (
          <MapViewMarker
            key={marker.id}
            price={marker.price}
            coordinate={marker.coordinate}
            onPress={() => handleMarkerPress(marker.id)}
          />
        ))}
      </RNMapView>
      <MapViewHouseInfo show={showInfo} id={id} />
    </View>
  );
}
