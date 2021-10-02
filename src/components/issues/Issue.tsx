import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from '@chakra-ui/accordion';
import { HStack } from '@chakra-ui/layout';
import { useStyleConfig } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import parse from 'html-react-parser';
import marked from 'marked';
import React from 'react';
import { containerStyles } from '../style/styles';
import './issues.css';

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

	const descriptionContent = marked(data.description);
	const descriptionTitle = marked(data.title);

	return (
		<AccordionItem sx={styles} className='issue_element'>
			<AccordionButton>
				<HStack w='100%' justifyContent='space-between'>
					<HStack fontWeight='bold'>
						<span style={{ width: '4ch', textAlign: 'left' }}>
							{'#' + data.id}
						</span>
						{parse(descriptionTitle)}
					</HStack>
					{data.description ? <AccordionIcon /> : null}
				</HStack>
			</AccordionButton>
			{data.description ? (
				<AccordionPanel pb={4}>
					<div>{parse(descriptionContent)}</div>
				</AccordionPanel>
			) : null}
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
