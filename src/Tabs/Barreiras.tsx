import {VStack,Text} from 'native-base';
import { CardBarreira } from '../componentes/CardBarreira';
export default function Barreiras (){
    return(
        <VStack p={5} w="100%" bg="gray.100">
            <Text fontSize="2xl" mb={5}>Barreiras Disponíveis</Text>
            <CardBarreira/>
        </VStack>

    )
}