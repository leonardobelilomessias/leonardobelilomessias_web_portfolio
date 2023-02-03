import { VStack ,Text, HStack, Stack, Box} from "@chakra-ui/react";

export function ArtDesingn(){
    return(
        <>
        <VStack mt='12'>
            <Text mt='12' mb='4' fontFamily={'Monda'} fontSize='6xl'>
                Art&Design 
            </Text>
            <Stack pt='12' gap={'8'} direction={'row'}>
                <Box rounded={"2xl"} h='20rem' bg='gray.800' w='20rem'></Box>
                <Box rounded={"2xl"}  h='20rem' bg='gray.800' w='20rem'></Box>
                <Box rounded={"2xl"}h='20rem' bg='gray.800' w='20rem'></Box>
            </Stack>
            <Stack pt='12' gap={'8'} direction={'row'}>
                <Box rounded={"2xl"} h='20rem' bg='gray.800' w='20rem'></Box>
                <Box rounded={"2xl"}  h='20rem' bg='gray.800' w='20rem'></Box>
                <Box rounded={"2xl"}h='20rem' bg='gray.800' w='20rem'></Box>
            </Stack>
        </VStack>
        </>
    )
}