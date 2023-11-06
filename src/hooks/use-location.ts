import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

/**
 * Retrieves the user's current location.
 *
 * @return {Object} An object containing the user's current location, any error message, and a loading indicator.
 * 
 */
export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let isLoading = location === null && errorMsg === null;

  return { location, errorMsg, isLoading };
}
