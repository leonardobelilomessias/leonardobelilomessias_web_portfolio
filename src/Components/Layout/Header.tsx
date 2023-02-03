import { Box, Text } from "@chakra-ui/react";

export function Header(){
    return(
        
            <Box bg={'gray.800'} color={"blue.400"} height={'4rem'} width={'100%'}>
                <Text color={'white'} fontSize={'4xl'}> Menu</Text>
            </Box>
        
    )
}