import { extendTheme } from '@chakra-ui/react'
import { IssueConfig } from '../issues/Issue'

const theme = extendTheme({
  components: {
    Issue: IssueConfig
  },
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
