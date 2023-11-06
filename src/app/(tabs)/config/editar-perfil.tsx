import { Header } from '@/components/shared/header';
import { EditarPerfilFormulario } from '@/components/templates/editar-perfilt';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function EditarNosScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Editar Perfil" />
      <EditarPerfilFormulario />
    </View>
  );
}
