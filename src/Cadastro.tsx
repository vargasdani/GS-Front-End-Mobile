import { VStack, Image, Text, Box, Link ,ScrollView} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.jpeg'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { useState } from 'react';
import { secoes } from './assets/utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);


  function nextSecao(){
    if(numSecao<secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }
  function voltarSecao(){
    if(numSecao>0){
      setNumSecao(numSecao-1)
    }
  }


  return (
    <ScrollView flex={1}  p={5}>
      <Image source={Logo} alt="Logo Tech Splinter" width="140px" height="130px" alignSelf="center" />

      <Titulo>
        {secoes[numSecao].titulo}
      
      </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada=>{
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
          })
        }
 
      </Box>
      {numSecao > 0 &&<Botao onPress={() => voltarSecao()}>Voltar</Botao>}
      <Botao onPress={() => nextSecao()}mt={4} mb={14}>Próximo</Botao>



    </ScrollView>
  );
}