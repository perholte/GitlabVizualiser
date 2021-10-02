import React, { ReactNode } from 'react';
import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/accordion';
import { HStack } from '@chakra-ui/layout';
import { useStyleConfig } from '@chakra-ui/system';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { containerStyles } from '../style/styles';

interface AccordionListItemProps {
	buttonChildren: ReactNode;
	panelChildren: ReactNode;
	disablePanel?: boolean;
}

const AccordionListItem: React.FC<AccordionListItemProps> = ({
	buttonChildren,
	panelChildren,
	disablePanel,
}) => {
	const styles = useStyleConfig('AccordionListItem');

	return (
		<AccordionItem sx={styles}>
			<AccordionButton>
				<HStack w='100%' justifyContent='space-between'>
					<HStack fontWeight='bold'>{buttonChildren}</HStack>
					{disablePanel && <AccordionIcon />}
				</HStack>
			</AccordionButton>
			{disablePanel && (
				<AccordionPanel pb={4} px='2rem'>
					{panelChildren}
				</AccordionPanel>
			)}
		</AccordionItem>
	);
};

export default AccordionListItem;

export const AccordionListItemConfig: ComponentStyleConfig = {
	baseStyle: {
		width: '100%',
		...containerStyles,
		margin: 'auto',
	},
	variants: {
		open: {
			background: '#f9f9f9',
		},
		closed: {
			background: '#dedede', //TODO: chance color
		},
	},
};
