import { LogoutIcon } from '@/assets/icons';
import { Button } from '@/components/shared/button';
import { ScrollView } from '@/components/shared/scroll-view';
import { ConfigHeader, ConfigMenus } from '@/components/templates/config';
import { colors } from '@/styles/colors';
import { View } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <ScrollView styleView={{ marginBottom: 28 }}>
      <ConfigHeader />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 64,
        }}
      >
        <ConfigMenus />
        <Button
          type="square"
          variant="default"
          icon={LogoutIcon}
          text="Terminar Sessão"
          style={{ backgroundColor: '#E00000' }}
          styleText={{ color: colors.white }}
        />
      </View>
    </ScrollView>
  );
}
