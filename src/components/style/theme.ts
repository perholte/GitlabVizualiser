import { extendTheme } from '@chakra-ui/react'
import { IssueConfig } from '../issues/Issue'

const theme = extendTheme({
  components: {
    Issue: IssueConfig
  },
  fonts: {
    body: 'Helvetica',
  }
})

export default theme
