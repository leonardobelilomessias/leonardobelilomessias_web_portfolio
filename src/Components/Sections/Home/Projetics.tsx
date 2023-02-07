import { Box, Center, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NatCults from '../../../../public/Images/Home/natcults.svg'
import Cyber from '../../../../public/Images/Home/cyberchipset.svg'
import Base from '../../../../public/Images/Home/baseoutside.svg'
import Vila from '../../../../public/Images/Home/vila.svg'


interface BoxProjectProps{
    nameProject:string
    image:string
}
function BoxProject({nameProject,image}:BoxProjectProps){
    return(
        <VStack >
    
            <Box rounded={'2xl'} shadow='dark-lg' w={'17rem'} h='13rem' bg={'white'} position='relative'>
                <Image src={image}alt="" fill />
            </Box>
            <Box pb={'2'} px='5' borderBottom={'1px'} borderColor='teal.700' >
                <Text fontSize={'2xl'} fontFamily='Inter'>
                    {nameProject}
                </Text >
            </Box>
        </VStack>
    )
}

export function Projects(){
    return(
        <Stack mb='5rem' mt={'4rem'} px={['1rem','6rem']} >
            <Stack pt='2rem' >
            <Box display={'flex'} flexDirection='column' w={'15rem'}>
                <Text   fontSize={'5xl'} pl='6' fontFamily='Monda'>Projetos</Text>
                <Box alignSelf={['center','flex-end']} justifySelf='end' width={'8rem'} bg='pink.900' mb='6' height={'2px'}/>
            </Box>
            
            <Stack p='2' gap={'2'} mt={'15rem'} flex='1'  justify={['','space-around']} direction={'row'} overflow={['scroll','auto']} >

                <BoxProject nameProject="CyberChipset" image={Cyber}/>
                <BoxProject nameProject="Base Outside" image={Base}/>
                <BoxProject nameProject="Natcults"image={NatCults}/>
                <BoxProject nameProject="Vila do Silicio"image={Vila}/>


            </Stack>

            
            </Stack>
        </Stack>
    )
}