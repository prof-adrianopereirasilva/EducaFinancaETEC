import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" options={{ title:'Início', tabBarIcon:({color,size})=><Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="usuario" options={{ title:'Usuário', tabBarIcon:({color,size})=><Ionicons name="person" size={size} color={color} /> }} />
      <Tabs.Screen name="dolar" options={{ title:'Dólar', tabBarIcon:({color,size})=><Ionicons name="logo-usd" size={size} color={color} /> }} />
    </Tabs>
  )
}
