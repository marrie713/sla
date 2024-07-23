import { useState } from 'react';
import { View, TextInput, StatusBar, Text, Pressable } from "react-native";
import { StyleAluguel } from "./style";
import ButtonDarkExample from "../../components/dropdawn";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import React from 'react';

export default function Aluguel() {
    
    const [telefone, setTelefone] = useState('');

    const navigation = useNavigation();

    const handlePress = async () => {
        try {
            const response = await axios.post('http://192.168.1.110:3000', {
                veiculo: 'AlgumVeiculo',
                Valor_pago: 100, 
                telefone: telefone,
                tempo_horas: 5 
            });

            console.log(response.data);
            navigation.navigate("Comprovante");
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <View style={StyleAluguel.root}>
            <StatusBar />
            <View style={StyleAluguel.card}>
             
                <TextInput
                    style={StyleAluguel.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Pressable style={StyleAluguel.button} onPress={handlePress}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Começar</Text>
                </Pressable>
            </View>
        </View>
    );
}
