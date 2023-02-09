import { Box, Button, Flex, Input, Stack, Textarea, Text, Heading } from "@chakra-ui/react";


export default function Projects(){
    return(
        <>
                    <Flex  py='4rem' mb='4rem' justify={'center'} flexDir={'column'}>
    
    <Box px={['','16rem' ]} textAlign='center' >
        
        <Text p={['','2']} display={'inline-block'} fontSize={'4xl'} fontFamily={'Monda,sans-serif'} fontWeight='bold'  borderBottom={'1px'} borderColor='pink.700'>
            Projetos
        </Text>
    </Box>
    
    <Box width={['','45rem']} mx='auto' h='80vh' px='8rem' py='6rem' my='4rem'    >
        <Heading textAlign={'center'} fontFamily={'inter'}>Página em Produção</Heading>
    </Box>
    <Box>
    
    </Box>
</Flex>
        </>
        )
}