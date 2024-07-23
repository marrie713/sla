import React, { useState } from "react";
import { View, Text, Image, StatusBar, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import { Homestyle } from "./style";

const apiConfig = axios.create({
  baseURL: 'http://192.168.1.110:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function Logar() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isNomeError, setIsNomeError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  async function login() {
    if (!isPasswordError && !isNomeError && nome !== '' && password !== '') {
      try {
        let res = await apiConfig.post('/login', {
          nome: nome,
          senha: password
        });

        if (res.status === 204) {
          Alert.alert('Ops...', 'Usuário ou senha incorretos!', [
            {
              text: 'Ok'
            }
          ]);
        } else {
          navigation.navigate("Aluguel");
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Erro ao logar... :(');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    }
  }

  return (
    <View style={Homestyle.root}>
      <StatusBar />
      <View style={Homestyle.Logo}>
        <Image source={require('../../assets/Logo.png')} style={{ height: 70, width: 230 }} />
        <Text style={Homestyle.Titulo}> Aluguel de Carros </Text>
      </View>

      <View style={Homestyle.card}>
        <Text style={Homestyle.TituloLogin}>Login</Text>

        <TextInput
          style={isNomeError ? estilo.input_container_error : estilo.input_container}
          placeholder="Usuário"
          onChangeText={text => setNome(text)}
        />

        <TextInput
          style={isPasswordError ? estilo.input_container_error : estilo.input_container}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <Pressable style={Homestyle.button} onPress={Logar}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Começar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  input_container_error: {
    borderWidth: 0,
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#797976',
    fontSize: 18,
  },
  input_container: {
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#797976',
    fontSize: 18,
  },
});
