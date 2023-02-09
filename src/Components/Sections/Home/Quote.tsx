import { Box, Text } from "@chakra-ui/react";

export function Quote(){
    return(
        <Box p={'12'} display={'flex'}  fontFamily='Monda' mt='8rem' mb='8rem'>
            <Text m={'auto'} width={'80%'}  fontSize={['4xl','8xl']} fontFamily='Inter'  fontWeight={'bold'}>
            " Quando uma mente se expande, 
            Jamais ela volta para seu formato original. "
            </Text>
        </Box>
    )
} 