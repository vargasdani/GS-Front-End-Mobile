import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.jpeg';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { informacoes } from "../assets/utils/mock";


export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="center" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo TECH SPLPINTER " width="250px" height="250px" mt={1} />
        <Titulo color="blue.500">Seja bem-vindo, Hete!</Titulo>

      </VStack>
    </ScrollView>
  );
}