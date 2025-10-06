import { View, Button, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import * as SMS from 'expo-sms';

export default function Telefone() {
  const ligar = () => {
    Linking.openURL('tel:11987654321'); // substitua pelo número real
  };

  const enviarSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (!isAvailable) {
      Alert.alert('Erro', 'SMS não disponível neste dispositivo');
      return;
    }
    await SMS.sendSMSAsync(['11987654321'], 'Olá! Teste de envio via Expo.');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ligar para número" onPress={ligar} />
      <Button title="Enviar SMS" onPress={enviarSMS} />
    </View>
  );
}
