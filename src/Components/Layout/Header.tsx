import { Box, HStack, Text } from "@chakra-ui/react";

export function Header(){
    return(
        <HStack  bgGradient='linear(to-t,black,teal.900)'  align={'center'}>

            <HStack pl='12' color={"blue.400"} height={'4rem'} width={'100%'}>
                
                <Text  color={'white'} fontSize={'1xl'}> Leonardo Belilo</Text>
            </HStack>


            <HStack gap={'10'} px={'12'}>
                <Text fontFamily={'Monda'} color={'white'}>
                    Inicio
                </Text>
                <Text fontFamily={'Monda'}  color={'white'}>
                    Sobre
                </Text>
                <Text fontFamily={'Monda'}  color={'white'}>
                    Projetos
                </Text>
                <Text fontFamily={'Monda'}  color={'white'}>
                    Blog
                </Text>
                <Text  fontFamily={'Monda'} color={'white'}>
                    Contato
                </Text>
            </HStack>
        </HStack>
        
    )
}