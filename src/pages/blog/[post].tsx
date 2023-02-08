
import { Box, Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticPropsContext } from 'next'
import Image from "next/image";
import { useRouter } from "next/router";
import { createClient } from '../../services/prismic'
import img from '../../../public/Images/Home/launch.svg'
interface BodyPostProps{
    title:[{
        text:string
    }]
    content:[{
        text:string
    }]
}
interface PostProps{
    id: string,
    uid: string,
    last_publication_date: string
    data: {
      title: string
      introduction:[{text:string}]
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
export default function Post({postdata}:{postdata:PostProps}){
    const {query} = useRouter()
    

    return(
        <>
            
            <Box padding={['','3rem']}>
                <Box px={['6','15rem']} pb='15rem'>
                <Text fontSize={'3xl'} fontFamily='Monda' my='3rem'>Post</Text>
                <Box my={'10'} position={'relative'} width='100%' height={'20rem'}>
                    <Image src={postdata.data.cover.url} alt='' style={{objectFit:"cover",}} fill/>
                </Box>
                <Heading>
                    {postdata.data.title}
                </Heading>
                <Text my='8'>
                    {postdata.data.introduction[0].text}
                </Text>
                    <Box>

                    {postdata.data.bodypost.map(post=>(
                        <Box key={post.title[0].text} mt='5rem'>
                            <Text my={'1rem'} fontWeight='bold' fontSize={'2xl'}> {post.title[0].text}</Text>
                            <Text fontSize={'medium'}>{post.content[0].text}</Text>
                        </Box>
                    ))}
                    </Box>
                </Box>
                
            </Box>
        </>
    )
}

export const getStaticPaths : GetStaticPaths<{ uid: string }> = async () => {

    return {
        paths: [
            
        ], //indicates that no page needs be created at build time
        fallback: 'blocking'
    }
}
export async function getStaticProps({
    previewData,params
  }: GetStaticPropsContext) {
    const client = createClient({previewData})
    //    ^ Automatically contains references to document types
  const {post} = params as {post:string} 

    const results= await client.getByUID('post',post)
    //console.log(results)
    const postdata = results
    //    ^ Typed as PageDocument
    // results.forEach(post=>{
    //     //console.log(post.data.introduction)
    // })


    return {
      props: {
        postdata,

      },
    }
  }