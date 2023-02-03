import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#00C5E0',
    800: '#153e75',
    700: '#2a69ac',
  },
}
export const theme = extendTheme({ colors })