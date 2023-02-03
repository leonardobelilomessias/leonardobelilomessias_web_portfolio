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


export default function Home() {
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
        <PostsHome/>
        <ArtDesingn/>
        
      </Box>
    </>
  )
}
