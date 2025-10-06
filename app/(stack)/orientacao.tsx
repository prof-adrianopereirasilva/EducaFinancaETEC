import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default function Orientacao() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const sub = Magnetometer.addListener(data => {
      let angle = Math.atan2(data.y, data.x) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      setHeading(Math.round(angle));
    });
    return () => sub.remove();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bússola: {heading}°</Text>
    </View>
  );
}
