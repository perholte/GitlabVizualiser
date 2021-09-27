import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, HStack } from '@chakra-ui/layout';
import { useStyleConfig } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import React from 'react';

//TODO: update this type and maybe move it to a 'type' folder
export interface IssueType {
	id: number;
	title: string;
	description: string;
	closed: boolean;
}

interface IssueProps {
	data: IssueType;
}

const Issue: React.FC<IssueProps> = ({ data }) => {
	const styles = useStyleConfig('Issue', {
		variant: data.closed ? 'closed' : 'open',
	});
	console.log(styles);

	return (
		<AccordionItem sx={styles}>
			<AccordionButton>
				<HStack>
					<span>{'#' + data.id}</span>
					<h2>
						<Box flex='1' textAlign='left'>
							{data.title}
						</Box>
					</h2>
					<AccordionIcon />
				</HStack>
			</AccordionButton>
			<AccordionPanel pb={4}>{data.description}</AccordionPanel>
		</AccordionItem>
	);
};
export default Issue;

export const IssueConfig: ComponentStyleConfig = {
	baseStyle: {
		width: '400px',
		height: '2rem',
	},
	variants: {
		open: {
			background: 'grey.200', //TODO: change color
		},
		closed: {
			background: 'grey.500', //TODO: chance color
		},
	},
};
