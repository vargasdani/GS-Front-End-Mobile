import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.jpeg';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { informacoes } from "../assets/utils/mock";

export default function SaibaMais(){
    return(
        <ScrollView flex={1} bgColor="white">
        <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
          <Image source={Logo} alt="Logo TECH SPLPINTER " width="100px" height="100px" mt={1} />
          <Titulo color="blue.500">Sobre nós</Titulo>

  
          <Titulo color="blue.800" alignSelf="center">Informações</Titulo>
          <VStack space={3} divider={<Divider />} w="100%">
            {
              informacoes.map(informacoes => (
                <Box key={informacoes.id} w="100%" borderRadius="lg" p={3}>
                  <Text color="gray.300" fontSize="md" textAlign="justify">
                    {informacoes.text}
                  </Text>
                  <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{informacoes.titulo}</Text>
                </Box>
              ))
            }
          </VStack>
        </VStack>
      </ScrollView>
    );
  }