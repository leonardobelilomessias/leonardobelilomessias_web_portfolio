import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { FaArrowAltCircleDown, FaArrowLeft } from "react-icons/fa";
import {CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'

export function PostsHome(){
    return(
        <Stack  p={['3','12' ]}justify={'center'} px={['1rem','6rem']} my={['5rem','8rem']}>
            <Text fontSize={'6xl'} fontFamily='Monda'> Posts</Text>
            <Flex m='auto' alignSelf={'center'} gap={'5'} flexDirection='row' flexWrap={'wrap'}>
                <Box rounded={'lg'} h={'14rem'} minW={['100%','30%']} flex={'1'}  bg={'teal.400'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'}  minW={['100%','50vw']} flex='1' bg={'teal.400'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'}  minW={'50vw'} flex='1' bg={'red'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'}  minWidth={['100%','42vw']}  bg={'teal.400'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'}flex='1' minWidth={['100%','auto']}  bg={'teal.400'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'} flex='1' minWidth={['100%','auto']}   bg={'teal.400'}>boz1</Box>
                <Box rounded={'lg'} h={'14rem'} flex='1' w={['100%','auto']}  bg={'teal.400'}>boz1</Box>
            </Flex>
            <Flex alignItems='end' justify={'end'} >
                <Text marginRight={'6'} fontSize={'2xl'} fontFamily='Monda' marginTop='2rem'>Ver todos</Text>
                <Center>
                <CgArrowLongRight size={30} color={'#00C5E0'}/>
                </Center> 
            </Flex>
        </Stack>
    )
}