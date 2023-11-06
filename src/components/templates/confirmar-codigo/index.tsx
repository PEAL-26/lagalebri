import { View } from 'react-native';
import { router } from 'expo-router';

import { Button } from '@/components/shared/button';
import { AuthTitle } from '@/components/shared/auth';
import { ScrollView } from '@/components/shared/scroll-view';

import { Inputs } from './inputs';

export function TemplateConfirmarCodigo() {
  return (
    <ScrollView>
      <View style={{ paddingBottom: 16 }}>
        <AuthTitle
          title="Qual é o código?"
          description="Confirmar o código enviado para +244 922321344"
        />

        <Inputs />

        <Button
          type="square"
          variant="primary"
          text="Continuar"
          style={{ marginTop: 20 }}
          onPress={() => router.push('/identificacao')}
        />
      </View>
    </ScrollView>
  );
}
