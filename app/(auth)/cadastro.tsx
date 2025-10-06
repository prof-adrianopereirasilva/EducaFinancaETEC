import { View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';
import { router, Link } from 'expo-router';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = () => {
    if(email && senha) { alert('Cadastro realizado!'); router.replace('/(auth)/login'); }
    else alert('Preencha todos os campos!');
  }

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Cadastro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth:1, marginBottom:10, padding:8 }} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} style={{ borderWidth:1, marginBottom:10, padding:8 }} />
      <Button title="Cadastrar" onPress={cadastrar} />
      <Link href="/(auth)/login">Voltar ao login</Link>
    </View>
  )
}
