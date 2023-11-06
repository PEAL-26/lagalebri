import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { InputPhone } from '@/components/shared/input-phone';
import { InputText } from '@/components/shared/input-text';
import { GoogleIcon } from '@/assets/icons';
import { Button } from '@/components/shared/button';
import { colors } from '@/styles/colors';

export function EditarPerfilFormulario() {
  const profile = {
    name: 'Pedro Lopes',
    telefone: '900 000 000 000',
    provider: 'google',
  };

  const colorButton = profile.provider ? '#011621' : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <InputText
          label="Nome"
          placeholder="Nome do usuário"
          editable={profile.provider ? false : true}
        />
        <InputPhone label="Telefone" value={profile.telefone} />

        <Button type="square" variant="primary" text="Guardar" style={{ marginTop: 20 }} />
      </View>

      <Button
        type="square"
        variant="outline"
        text={profile.provider ? 'Desvincular conta Google' : 'Vincular conta Google'}
        icon={() => <GoogleIcon />}
        styleText={{ color: profile.provider ? colors.white : undefined }}
        style={[styles.buttonGoogle, { borderColor: colorButton, backgroundColor: colorButton }]}
      />
    </View>
  );
}
