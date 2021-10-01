import { extendTheme } from '@chakra-ui/react'
import { IssueConfig } from '../issues/Issue'

const theme = extendTheme({
  fonts: {
    body: 'Helvetica',
  },
  components: {
    Button: {
      baseStyle: {
        colorScheme: "blue"
      }
    },
    Issue: IssueConfig,
  }
})

export default theme
