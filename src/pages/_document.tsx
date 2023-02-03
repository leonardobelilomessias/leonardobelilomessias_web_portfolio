import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../Components/Layout/Header'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '../theme/theme'
export default function Document() {
  return (
    <Html lang="pt_BR">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&family=Monda:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
