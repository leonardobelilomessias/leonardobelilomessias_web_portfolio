import { Stack, Text, VStack } from "@chakra-ui/react";

export function Footer(){
    return(
        <>
            <VStack  bg='gray.700'>
                <Stack h='2rem' w={'100%'} bg='gray.700'>

                </Stack>
                <Stack  w={'100%'} minH={'8rem'} bg='teal.600'>
                    <Text p={'5'} textAlign={'center'} color='white'>Todos direitos reservados</Text>
                </Stack>
            </VStack>
        </>
    )
}