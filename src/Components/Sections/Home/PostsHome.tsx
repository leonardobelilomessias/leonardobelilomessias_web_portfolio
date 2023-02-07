import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { FaArrowAltCircleDown, FaArrowLeft } from "react-icons/fa";
import {CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'
import Image from "next/image";
import Picture from '../../../../public/Images/Home/lancamento.svg'

export function PostsHome(){
    return(
        <Stack  p={['4','12' ]}justify={'center'} px={['','6rem']} my={['5rem','8rem']}>
            <Text fontSize={['4xl','6xl']} fontFamily='Monda'> Posts</Text>
            <Flex m='auto' alignSelf={'center'} gap={'5'} flexDirection='row' flexWrap={'wrap'}>
                <Box rounded={"1rem"} h={['14rem']} minW={['90vw','30rem']} flex={'1'}  bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box rounded={"1rem"} h={'14rem'}  minW={['100%','60rem']} flex='1' bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box rounded={"1rem"} h={'14rem'}  minW={['100%','60rem']} flex='1' bg={'gray.700'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box rounded={"1rem"} h={'14rem'}  minWidth={['100%','40rem']}  bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box rounded={"1rem"} h={'14rem'}flex='1' minWidth={['100%','20rem']}  bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box rounded={"1rem"} h={'14rem'} flex='1' minWidth={['100%','20rem']}   bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                </Box>
                <Box display={'flex'} rounded={"1rem"} h={'14rem'} flex='1' w={['100%','20rem']}  bg={'gray.800'} position='relative'>
                    <Image src={Picture} alt='' fill   style={{objectFit:"cover",borderRadius:"1rem"}} />
                </Box>
            </Flex>
            <Flex alignItems='end' justify={'end'} >
                <Text marginRight={'6'} fontSize={'2xl'} fontFamily='Monda' >Ver todos</Text>
                <Center>
                <CgArrowLongRight size={30} color={'#00C5E0'}/>
                </Center> 
            </Flex>
        </Stack>
    )
}