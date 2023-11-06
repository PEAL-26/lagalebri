import { Text, View } from 'react-native';
import { Link, router } from 'expo-router';

import { GoogleIcon } from '@/assets/icons';
import { Button } from '@/components/shared/button';
import { InputPhone } from '@/components/shared/input-phone';

import { styles } from './styles';
import { ScrollView } from '@/components/shared/scroll-view';

export function TemplateLogin() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <InputPhone label="Continuar com telefone" />

        <View style={styles.buttonsContainer}>
          <Button
            type="square"
            variant="primary"
            text="Continuar"
            onPress={() => router.push('/confirmar-codigo')}
          />
          <Button
            type="square"
            variant="outline"
            text="Continuar com Google"
            icon={() => <GoogleIcon />}
            style={styles.buttonGoogle}
          />
        </View>

        <View style={styles.separator} />

        <Text style={styles.terms}>
          Ao se registrar você concorda com os nossos{' '}
          <Link href="/termos-servico" style={styles.link}>
            termos de serviço
          </Link>
          {' e '}
          <Link href="/politica-privacidade" style={styles.link}>
            política de privacidade
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}
