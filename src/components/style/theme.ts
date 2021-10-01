import { extendTheme } from '@chakra-ui/react'
import { IssueConfig } from '../issues/Issue'

const theme = extendTheme({
	fonts: {
		body: 'Helvetica',
	},
	colors: {
		1: '#000',
		2: '#fff',
		3: '#aaa',
		4: '#123abc',
		5: '#ff0',
		6: '#ff00ffaa',
		7: '#00ff00aa',
	},
	components: {
		Button: {
			baseStyle: {
				colorScheme: "blue",
			}
		},
		Issue: IssueConfig,
		SingleCommitMessage: IssueConfig,
		Container: {
			baseStyle: (darkMode: boolean) => ({
				bg: darkMode ? "#000" : "#fff",
				color: darkMode ? "#fff" : "#000",
			}),
			variants: {},
			sizes: {}
		},
	},
})

export default theme
