import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles:{
    global:{
      body:{
        bg:'black',
        color:'white',
        fontFamily:'Inter'
      }
    }
  }
})