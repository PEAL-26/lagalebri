import { AuthTitle } from '@/components/shared/auth';
import { Inputs } from './inputs';
import { Button } from '@/components/shared/button';
import { View } from 'react-native';
import { router } from 'expo-router';

export function TemplateConfirmarCodigo() {
  return (
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
  );
}
