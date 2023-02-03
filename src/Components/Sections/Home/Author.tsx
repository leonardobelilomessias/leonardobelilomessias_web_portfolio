import {Avatar, Stack,Box, Center, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Profile from '../../../../public/Images/Home/profile.svg'

function BoxImage(){
    return(
    <>
        <Box alignContent={'center'} justifyContent='center' position={'relative'} justifyItems={'center'} width={'13rem'} height='13rem' >
            <Box width={'13rem'} filter='auto' blur={'0.7rem'} position='absolute'  overflow={'hidden'} rounded='full' height='13rem' >
                <Image alt="" src={Profile} fill />
            </Box> 
            <Box width={'10rem'} alignSelf='center' justifySelf={'center'} position='absolute' top={'6'} left={'8'} overflow={'hidden'} rounded='full' height='10rem' >
            <Image alt="" src={Profile} fill />
            </Box> 
            
        </Box>
    </>
    )
}

export function Author(){
    return(
        <>
            <Box   p={'10'} >
                <Box 
                border='1px'
                rounded={'3xl'} 
                boxShadow='3px 10px 90px rgba(0,197,294,0.6)'
                color={'teal.200'}  
                width={'70%'} 
                h={'30rem'} 
                m='auto'>
                 
                    <Stack direction={'row'} h='100%'>
                        <VStack
                        flex='1'
                        align={'center'}
                        justify='center'
                        >
                            <BoxImage/>
                            <VStack>

                            <Text fontSize={'2xl'} fontFamily={'Monda'}>Leonardo Belio Messias</Text>
                            <Text>(Criador desenvolvedor)</Text>
                            </VStack>
                        </VStack>

                        <Center 
                        flex={'2'} 
                        height='100%'
                        mt={'auto'}
                    >
                            <Box 
                                mt='1rem'
                                width={'30rem'}
                                transform='rotate(5deg)'
                                height={'20rem'} 
                                bgGradient='linear(to-b, rgba(0,197,294,0.5), rgba(0,197,294,0.05))'
                                >
                                    
                                </Box>
                                <Box 
                                position={'absolute'} 
                                mt='1rem'
                                width={'30rem'}
                                
                                height={'20rem'} 
                                bgGradient='linear(to-b, rgba(0,197,294,0.5), rgba(0,197,294,0.05))'
                                >
                                    <Text p={'6'}>
                                    Diante dos ultimos dias existe uma grabde de
                                    demanda sobre tecn lore Diante dos ultimos dias 
                                    existe uma grabde de
                                    demanda sobre tecn lore
                                    </Text>
                                </Box>
                        </Center>
                    </Stack>
                    
                    </Box>
            </Box>
        </>
    )
}