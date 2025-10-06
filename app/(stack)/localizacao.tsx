import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

export default function Localizacao() {
  const [coords, setCoords] = useState<Location.LocationObjectCoords | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const obterLocalizacao = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão negada');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setCoords(location.coords);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Obter localização" onPress={obterLocalizacao} />
      {erro && <Text>{erro}</Text>}
      {coords && (
        <>
          <Text>Latitude: {coords.latitude}</Text>
          <Text>Longitude: {coords.longitude}</Text>
        </>
      )}
    </View>
  );
}
