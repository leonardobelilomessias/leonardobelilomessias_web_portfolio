import { Box, Stack, Text, VStack } from "@chakra-ui/react";

export function Footer(){
    return(
        <>
            <VStack  bg='gray.700'>
                <Stack h='1rem' w={'100%'} bg='gray.700'>

                </Stack>
                <Stack  w={'100%'} minH={'6rem'} bgGradient='linear(to-b, rgba(0,197,294,0.5), rgba(0,197,294,0.05))'>
                    <Box p={'5'}>
                        <Text  textAlign={'center'} fontFamily={'Inter'} color='white'>Leonardo Belilo Messias </Text>
                        <Text  textAlign={'center'} fontWeight={'bold'} fontFamily={'Inter'}  color='white'>Desenvolvedor de software </Text>

                    </Box>

                    Desenvolvedor de Software
                </Stack>
            </VStack>
        </>
    )
}