import React, { useEffect, useState } from 'react';
import { VStack, Text, Spinner } from 'native-base';
import { CardBarreira } from '../componentes/CardBarreira';
import axios from 'axios';

export default function Barreiras() {
  const [barreiras, setBarreiras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3333/barreiras');
        setBarreiras(response.data.barreiras);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <VStack p={5} w="100%" bg="gray.100">
      <Text fontSize="2xl" mb={5}>Barreiras Disponíveis</Text>
      {barreiras.map(barreira => (
        <CardBarreira
          key={barreira.id}
          localizacao={barreira.localizacao}
          capacidadeMax={barreira.capacidadeMax}
          dataCapacidade={barreira.DataCapacidade}
        />
      ))}
    </VStack>
  );
}