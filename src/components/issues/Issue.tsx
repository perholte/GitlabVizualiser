import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/accordion';
import { HStack } from '@chakra-ui/layout';
import { useStyleConfig } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import React from 'react';
import { containerStyles } from '../style/styles';

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

	return (
		<AccordionItem sx={styles}>
			<AccordionButton>
				<HStack w='100%' justifyContent='space-between'>
					<HStack>
						<span style={{ width: '4ch', textAlign: 'left' }}>
							{'#' + data.id}
						</span>
						<h2>{data.title}</h2>
					</HStack>
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
