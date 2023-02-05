import { Box, HStack, Menu, Text } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import { TbMenu2 } from "react-icons/tb";

export function Header(){
    return(
        <HStack  bgGradient='linear(to-t,black,teal.900)'  align={'center'}>

            <HStack justify={['space-around', 'space-between']} pl='12' color={"blue.400"} height={'4rem'} width={'100%'}>
                <Text textAlign={'left'} color={'white'} fontSize={'1xl'}> Leonardo Belilo</Text>
                <Box display={['block','none']}>
                <TbMenu2 size={25} color="white" ></TbMenu2>
                </Box>
            </HStack>


            <HStack display={['none','flex','flex']} gap={'10'} px={'12'}>
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