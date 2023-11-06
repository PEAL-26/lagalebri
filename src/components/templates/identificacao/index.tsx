import { AuthTitle } from '@/components/shared/auth';
import { Button } from '@/components/shared/button';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

export function TemplateIdentificacao() {
  return (
    <View style={{ paddingBottom: 16 }}>
      <AuthTitle
        title="Qual é o seu nome?"
        description="Insira o seu nome para a sua identificação."
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#929292"
          placeholder="Nome do usuário"
        />
      </View>

      <Button type="square" variant="primary" text="Continuar" style={{ marginTop: 20 }} />
    </View>
  );
}
