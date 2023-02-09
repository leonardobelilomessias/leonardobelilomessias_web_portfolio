import { Flex ,Box,Text, Input, Button, Stack, Textarea} from "@chakra-ui/react";


export default function Contact(){
    return(


        <Flex  py={['1rem','4rem']}  mb={['','4rem' ]}justify={'center'} flexDir={'column'}>
    
            <Box px={['','16rem' ]} textAlign='center' >
                
                <Text p={['','2']} display={'inline-block'} fontSize={'4xl'} fontFamily={'Monda,sans-serif'} fontWeight='bold'  borderBottom={'1px'} borderColor='pink.700'>
                    Contato
                </Text>
            </Box>
            
            <Stack width={['','45rem']} mx={['1rem','auto']} px={['1rem','8rem']} py={['4rem','6rem']} my='4rem'  bgGradient='linear(to-b, rgba(0,197,294,0.5), rgba(0,197,294,0.05))'  >
                <Stack  mb='5rem' spacing={'7'} flexDirection={'column'} >
                        <Input placeholder="nome"  type={'text'}/>
                        <Input placeholder="email" type={'email'}/>
                        <Input placeholder="Whatsapp" type={'number'}/>

                        <Textarea placeholder="Escreva aqui a sua mensagem" minH={'12rem'}/>
                        <Button maxW={'10rem'} colorScheme='pink'>Enviar</Button>
                </Stack>
            </Stack>
            <Box>
            
            </Box>
        </Flex>

    )
}