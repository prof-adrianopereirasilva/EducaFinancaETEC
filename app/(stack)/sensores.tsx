import { useState, useEffect } from "react";
import { View, Text, Button, Platform } from "react-native";

export default function Sensores() {
  const [acel, setAcel] = useState({ x: 0, y: 0, z: 0 });
  const [gyro, setGyro] = useState({ x: 0, y: 0, z: 0 });
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let acelSub:any=null, gyroSub:any=null;

    if(Platform.OS !== "web" && ativo){
      const { Accelerometer, Gyroscope } = require("expo-sensors");
      Accelerometer.setUpdateInterval(500);
      Gyroscope.setUpdateInterval(500);
      acelSub = Accelerometer.addListener(setAcel);
      gyroSub = Gyroscope.addListener(setGyro);
    }

    return () => {
      if(acelSub) acelSub.remove();
      if(gyroSub) gyroSub.remove();
    }
  }, [ativo]);

  if(Platform.OS==="web") return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>🛠 Sensores não disponíveis na Web</Text>
    </View>
  )

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Acelerômetro:</Text>
      <Text>x:{acel.x.toFixed(2)} y:{acel.y.toFixed(2)} z:{acel.z.toFixed(2)}</Text>
      <Text style={{marginTop:10}}>Giroscópio:</Text>
      <Text>x:{gyro.x.toFixed(2)} y:{gyro.y.toFixed(2)} z:{gyro.z.toFixed(2)}</Text>
      <Button title={ativo?"Parar":"Iniciar"} onPress={()=>setAtivo(!ativo)} />
    </View>
  )
}
