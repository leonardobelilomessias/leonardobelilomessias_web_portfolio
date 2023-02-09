import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { FaArrowAltCircleDown, FaArrowLeft } from "react-icons/fa";
import {CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'
import Image from "next/image";
import Picture from '../../../../public/Images/Home/lancamento.svg'
import { useRouter } from "next/router";
import Link from "next/link";

interface BodyPostProps{
    title:{
        text:string
    }[]
    content:{
        text:string
    }[]
  }
  interface PostProps{
    id: string,
    uid: string,
    last_publication_date: string
    data: {
      title: string
      introduction:{text:string}[]
      cover: {
        url:string
      }
      bodypost: BodyPostProps[]
    }
  }[]
  interface dataProps{
    data:PostProps[]
  }

export function PostsHome({data}:dataProps){
    const {push} = useRouter()
    const infoPost = data.map(post=>{
        return{
            title:post.data.title,
            image: post.data.cover.url,
            url:post.uid
        }
    })
    return(
        <Stack  p={['4','12' ]}justify={'center'} px={['','6rem']} my={['5rem','8rem']} >
            <Text fontSize={['4xl','6xl']} fontFamily='Monda'> Posts</Text>
            <Flex m='auto' alignSelf={'center'} gap={'5'} flexDirection='row' flexWrap={'wrap'}>
                <Box rounded={"1rem"} h={['20rem']} minW={['90vw','30rem']} flex={'1'}    position='relative'  _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[0].url}`)} >
                    
                    <Box rounded={"1rem"} h={['14rem']} minW={['90vw','30rem']} flex={'1'}    position='relative' >
                    <Image src={infoPost[0].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}} fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[0].title}</Text>
                </Box>

                <Box rounded={"1rem"} h={'20rem'}  minW={['100%','60rem']} flex='1'   position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[1].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'}  minW={['100%','60rem']} flex='1'   position='relative'>
                    <Image src={infoPost[1].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[1].title}</Text>
                </Box>

                <Box rounded={"1rem"} h={'20rem'}  minW={['100%','40rem']} flex='1'  position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[2].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'}  minW={['100%','40rem']} flex='1'  position='relative'>
                    <Image src={infoPost[2].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[2].title}</Text>

                </Box>

                <Box rounded={"1rem"} h={'20rem'}  minWidth={['100%','40rem']}    position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[3].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'}  minWidth={['100%','40rem']}    position='relative'>
                    <Image src={infoPost[3].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[3].title}</Text>

                </Box>

                <Box rounded={"1rem"} h={'20rem'}flex='1' minWidth={['100%','20rem']}    position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[4].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'}flex='1' minWidth={['100%','20rem']}    position='relative'>
                        <Image src={infoPost[4].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[4].title}</Text>
                </Box>

                <Box rounded={"1rem"} h={'20rem'} flex='1' minWidth={['100%','20rem']}     position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[5].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'} flex='1' minWidth={['100%','20rem']}     position='relative'>
                        <Image src={infoPost[5].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[5].title}</Text>
                </Box>
                <Box rounded={"1rem"} h={'20rem'} flex='1' minWidth={['100%','20rem']}     position='relative' _hover={{cursor:"pointer"}} onClick={()=>push(`/blog/${infoPost[6].url}`)} >
                    <Box rounded={"1rem"} h={'14rem'} flex='1' minWidth={['100%','20rem']}     position='relative'>
                        <Image src={infoPost[6].image} alt='' fill style={{objectFit:"cover",borderRadius:"1rem"}}/>
                    </Box>
                    <Text _hover={{cursor:"pointer", color:'teal.400'}}   fontWeight='bold' fontSize={['medium','2xl']}>{infoPost[6].title}</Text>
                </Box>
            </Flex>
            <Link href={'/blog'}>
            <Flex  alignItems='end' justify={'end'} >
                <Text marginRight={'6'} fontSize={'4xl'} fontFamily='Monda' >Ver todos</Text>
                <Center>
                <CgArrowLongRight size={30} color={'#00C5E0'}/>
                </Center> 
            </Flex>
            </Link>
        </Stack>
    )
}
