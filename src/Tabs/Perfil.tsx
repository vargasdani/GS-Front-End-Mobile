import {VStack,Text,ScrollView,Avatar,Divider} from 'native-base'
import { Titulo } from '../componentes/Titulo'
export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                
                <Avatar size="xl"source={{uri:"https://github.com/vargasdani.png"}} mt={5}/>
                <Titulo color="blue.500">Suas Informações</Titulo>
                <Titulo>Tech Splinter</Titulo>
                <Titulo>06/06/2003</Titulo>
                <Titulo>São Paulo</Titulo>

                <Divider mt={5}/>
                <Titulo color="blue.500">Histórico de contribuição</Titulo>
            </VStack>
        </ScrollView>

    )
}