import { Box, Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import type { GetStaticPropsContext } from 'next'
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
    content:string
}
function BoxPost({title, content}:renderPostProps){
    return(

            <Box  my='2rem' flexDirection={'column'}>
                <Text  fontSize={'3xl'} fontWeight={'bold'}>{title}</Text>
                <Text maxWidth={'150ch'} overflow='hidden' textOverflow={'ellipsis'} whiteSpace='nowrap'>{content}</Text>
                <Button justifySelf={'flex-end'} colorScheme={'teal'}>Continue lendo</Button>
            </Box>

    )
}
export default function Blog({data}:dataProps){
 //console.log(data[0])

    return(
    <>
    <Flex p='8rem' flexDir={'column'}>

        <Heading width={'100%'} >
            Blog
        </Heading>
        
        <Stack  p='10rem'>

            {
                data.map(post=>(
                    <BoxPost title={post.data.title} content={post.data.introduction[0].text}/>

                ))
            }
        </Stack>
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