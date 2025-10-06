import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao EducaFinança!</Text>
      <Link href="/(stack)/sensores" asChild>
        <Button title="Ir para Sensores" />
      </Link>
      <Link href="/(stack)/maps" asChild>
        <Button title="Abrir Mapa" />
      </Link>
    </View>
  );
}
