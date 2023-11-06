import { Text, View } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderUser } from '@/components/shared/user';
import { Button } from '@/components/shared/button';
import { useRouter } from 'expo-router';

export function ConfigHeader() {
  const route = useRouter();
  const { top: marginTop } = useSafeAreaInsets();
  const isAuthenticated = true;

  const goToEditPerfil = () => {
    route.push('/(tabs)/config/editar-perfil');
  };

  return (
    <View style={[styles.container, { marginTop: marginTop + 12 }]}>
      {!isAuthenticated && <Button type="square" variant="primary" text="Fazer Login" />}

      {isAuthenticated && (
        <>
          <View style={styles.user}>
            <HeaderUser />
            <View style={styles.userDescription}>
              <Text style={styles.userName} numberOfLines={1}>
                Pedro Edilásio Araújo Lopes
              </Text>
              <Text style={styles.userEmail} numberOfLines={1}>
                edilasio@live.com
              </Text>
            </View>
          </View>
          <Button
            type="circle"
            variant="primary"
            text="Editar"
            style={{ paddingVertical: 8 }}
            onPress={goToEditPerfil}
          />
        </>
      )}
    </View>
  );
}
