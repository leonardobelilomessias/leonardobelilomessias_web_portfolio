
import type { AppProps } from 'next/app'
import { ChakraProvider ,CSSReset} from '@chakra-ui/react'
import { Header } from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'
import { theme } from '../theme/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider  theme={theme}  >
    <CSSReset/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>
  )
}
