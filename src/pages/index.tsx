import Head from 'next/head'
import { Box ,Text, theme} from '@chakra-ui/react'
import { Hero } from '../Components/Sections/Home/Hero'
import { Header } from '../Components/Layout/Header'
import { Technologies } from '../Components/Sections/Home/Technologies'
import { Author } from '../Components/Sections/Home/Author'
import { Projects } from '../Components/Sections/Home/Projetics'
import { Launch } from '../Components/Sections/Home/Launch'
import { Quote } from '../Components/Sections/Home/Quote'
import { PostsHome } from '../Components/Sections/Home/PostsHome'
import { ArtDesingn } from '../Components/Sections/Home/ArtDesign'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from "next/router";
import { CgArrowLongRight } from "react-icons/cg";
import { createClient } from '../services/prismic'

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


export default function Home({data}:dataProps) {
  
  return (
    <>
      <Head> 
        <title>Leonardo Belilo</title>
        <meta name="description" content="Criação re design"  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box   overflow='hidden' pb='6rem'   bg={'black'} alignContent={'center'}  color={'white'}>
        <Hero/>
        <Technologies/>
        <Author/>
        <Projects/>
        <Launch/>
        <Quote/>
        <PostsHome  data={data}/>
        <ArtDesingn/>
        
      </Box>
    </>
  )
}

export const  getStaticProps :GetStaticProps = async ({
  previewData,
}: GetStaticPropsContext) =>{
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
    revalidate:60*60*24
  }
}