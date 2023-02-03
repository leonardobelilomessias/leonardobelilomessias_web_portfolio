import { Box, Center, Stack, Text, VStack } from "@chakra-ui/react";

function BoxProject(){
    return(
        <VStack >
        
        <Center boxShadow='-10px -20px 50px rgba(0,197,294,0.2)' w={'20rem'}rounded={'2xl'} h='15rem' bgGradient={'linear(to-r, teal.700, teal.900)'}>
            <Box rounded={'2xl'} shadow='dark-lg' w={'17rem'} h='13rem' bg={'white'}>
            </Box>
        </Center>
        <Box pb={'2'} px='5' borderBottom={'1px'} borderColor='teal.700' >

            <Text fontSize={'2xl'} fontFamily='Inter'>
                Base outside
            </Text >
        </Box>
        </VStack>
    )
}

export function Projects(){
    return(
        <Stack px='10' mb='5rem'>
            <Stack px={'12'} pt='2rem' gap={5}>
            <Text mt={'10'} mb='8' fontSize={'5xl'} fontFamily='Monda'>Projetcs</Text>
            <Stack mt={'10rem'} justify={'space-around'} direction={'row'}>

                <BoxProject/>
                <BoxProject/>
                <BoxProject/>
                <BoxProject/>
            </Stack>

            
            </Stack>
        </Stack>
    )
}