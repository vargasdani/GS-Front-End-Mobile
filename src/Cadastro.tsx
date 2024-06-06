import React, { useState } from 'react';
import { ScrollView, Alert, Image } from 'react-native';
import { Box } from 'native-base';
import Logo from './assets/Logo.jpeg';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './assets/utils/CadastroEntradaTexto';
import { useNavigation } from '@react-navigation/native';
import Principal from './Tabs/Principal';
import { NavigationContainer } from '@react-navigation/native';

export default function Cadastro({navigation}) {

  const [numSecao, setNumSecao] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    qtdLimpezaBarreira: '0'
  });

  function nextSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function handleInputChange(label: string, value: string) {
    setFormData({ ...formData, [label]: value });
  }

  async function handleSubmit() {
    console.log('Submitting form with data:', formData);

    try {
      const response = await fetch('http://localhost:3333/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
          qtdLimpezaBarreira: parseInt(formData.qtdLimpezaBarreira, 10)
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      } else {
        console.log('Response error:', response);
        Alert.alert('Erro', 'Falha ao cadastrar usuário');
      }

   
    } catch (error) {
      console.error('Catch error:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o usuário');
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <Image source={Logo} alt="Logo Tech Splinter" style={{ width: 140, height: 130, alignSelf: 'center' }} />

      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto.map((entrada) => (
          <EntradaTexto
            label={entrada.label}
            placeholder={entrada.placeholder}
            key={entrada.id}
            value={formData[entrada.label] || ''}
            onChangeText={(value) => handleInputChange(entrada.label, value)}
          />
        ))}
      </Box>
      {numSecao > 0 && <Botao onPress={voltarSecao}>Voltar</Botao>}
      {numSecao < secoes.length - 1 ? (
        <Botao onPress={nextSecao} mt={4} mb={14}>
          Próximo
        </Botao>
      ) : (
       
        <Box>
           <Botao onPress={handleSubmit} mt={4} mb={14}>
          Cadastrar
        </Botao>
        <Botao onPress={()=>navigation.navigate('Principal')}>Entrar</Botao>        
        </Box>
    
      )}
    </ScrollView>
  );
}