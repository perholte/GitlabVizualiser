
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Helvetica',
  },
  components: {
    Button: {
      baseStyle: {
        colorScheme: "blue"
      }
    }
  }
})

export default theme