import { View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';
import { router, Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (email && senha) router.replace('/(tabs)');
    else alert('Preencha todos os campos!');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth:1, marginBottom:10, padding:8 }} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={{ borderWidth:1, marginBottom:10, padding:8 }} />
      <Button title="Entrar" onPress={entrar} />
      <Link href="/(auth)/cadastro">Não tem conta? Cadastre-se</Link>
    </View>
  );
}
