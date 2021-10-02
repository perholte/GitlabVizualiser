import { extendTheme } from '@chakra-ui/react';
import { AccordionListItemConfig } from '../common/AccordionListItem';

const theme = extendTheme({
	fonts: {
		body: 'Helvetica',
	},
	components: {
		Button: {
			baseStyle: {
				colorScheme: 'blue',
			},
		},
		AccordionListItem: AccordionListItemConfig,
	},
});

export default theme;
