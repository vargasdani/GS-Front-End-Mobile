import { VStack, Image, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.jpeg'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Tech Splinter" width="140px" height="130px" />

      <Titulo>
      Faça seu login
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Por favor, insira seu e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Por favor, insira sua senha"
        />
      </Box>
      <Botao onPress={()=>navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='' mt={2}>
        Esqueceu a senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Cadastre-se!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}