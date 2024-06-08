import { Text, Avatar, VStack } from 'native-base';
import { barreira_flutuante } from '../assets/barreira_flutuante.jpeg';
import { Botao } from './Botao';

export function CardBarreira({ localizacao, capacidadeMax, dataCapacidade }) {
  return (
    <VStack w="100%" bg="white" p={5} borderRadius="lg" shadow={2}>
      <VStack>
        <Avatar size="lg" source={barreira_flutuante} mt={5} />
        <Text>Localização: {localizacao}</Text>
        <Text>Capacidade Máxima: {capacidadeMax} kg</Text>
        <Text>Última vez analisada em: {dataCapacidade}</Text>
      </VStack>
      <Botao mt={5}>
        Fazer retirada de lixo
      </Botao>
    </VStack>
  );
}