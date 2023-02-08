import { Box, Button, Center, Flex, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import type { GetStaticPropsContext } from 'next'
import { useRouter } from "next/router";
import { CgArrowLongRight } from "react-icons/cg";
import { createClient } from '../../services/prismic'

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
interface renderPostProps{
    title:string
    content:string,
    link:string
}
function BoxPost({title, content,link}:renderPostProps){
    const {push,pathname,} = useRouter()
    
    return(

            <Box  mb='5rem'  flexDirection={'column'}>
                <Text  fontSize={['','3xl']} fontWeight={'bold'}>{title}</Text>
                <Text maxWidth={['200ch','150ch']} overflow='hidden' textOverflow={'ellipsis'} whiteSpace={['pre-wrap','nowrap']}>{content}</Text>
                <HStack cursor={'pointer'} onClick={()=>push(`${pathname}/${link}`)} display='flex' flexDirection='row'    _hover={{color:'pink.500',textDecor:'undeline'}}>

                <Text textDecor={'underline'} as='a' my='3' justifySelf={'flex-end'} colorScheme={'teal'}  >Continue lendo</Text> <CgArrowLongRight size={20} color="#00C5E0"></CgArrowLongRight> 
                </HStack>
            </Box>

    )
}
export default function Blog({data}:dataProps){


    return(
    <>
    <Flex px={['','8rem' ]} py='4rem' justify={'center'} flexDir={'column'}>

        <Box px={['','8rem' ]} textAlign='center' >
            
            <Text p={['','2']} display={'inline-block'} fontSize={'4xl'} fontFamily={'Monda,sans-serif'} fontWeight='bold'  borderBottom={'1px'} borderColor='pink.700'>
                Blog
            </Text>
        </Box>
        
        <Box  px={['8','10rem'] }py='8rem'>

            {
                data.map(post=>(
                    <BoxPost title={post.data.title} key={post.data.title} link={post.uid} content={post.data.introduction[0].text}/>

                ))
            }
        </Box>
    </Flex>
    </>
    )
}

export async function getStaticProps({
    previewData,
  }: GetStaticPropsContext) {
    const client = createClient({ previewData })
    //    ^ Automatically contains references to document types
  
    const {results}= await client.getByType('post')

    const data = results
    //    ^ Typed as PageDocument
    results.forEach(post=>{
        //console.log(post.data.introduction)
    })
    

    return {
      props: {
        data,
        person:{name:'leonardo'}
      },
    }
  }