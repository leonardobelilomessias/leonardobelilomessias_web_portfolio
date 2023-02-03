
import type { AppProps } from 'next/app'
import { ChakraProvider ,CSSReset,theme} from '@chakra-ui/react'
import { Header } from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'



export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}  >
    <CSSReset/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>
  )
}
