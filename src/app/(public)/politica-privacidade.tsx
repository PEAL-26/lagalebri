import { Header } from '@/components/shared/header';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PoliticaPrivacidadeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Políticas de Privacidade" />
      <View
        style={{
          flex: 1,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Em Desenvolvimento!</Text>
      </View>
    </View>
  );
}