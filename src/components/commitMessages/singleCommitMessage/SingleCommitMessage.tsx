import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Heading,
	HStack,
	ListItem,
	UnorderedList,
	useStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import { Commit } from '../../../api';
import '../../issues/issues.css';
export interface CommitMessageProps {
	commit: Commit;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TimeFormatOptions = {
	weekday: undefined,
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

export default function SingleCommitMessage({ commit }: CommitMessageProps) {
	const styles = useStyleConfig('SingleCommitMessage', {
		variant: 'open',
		size: 'xl',
	});
	return (
		<AccordionItem sx={styles} className='issue_element'>
			<h1>
				<AccordionButton>
					<HStack w='100%' justifyContent='space-between'>
						<HStack fontWeight='bold'>
							<Heading
								fontSize='1rem'
								overflow='hidden'
								w='500px'
								textOverflow='ellipsis'
								whiteSpace='nowrap'
							>
								{commit.title}
							</Heading>
						</HStack>
						<AccordionIcon />
					</HStack>
				</AccordionButton>
			</h1>
			<AccordionPanel pb={4}>
				<UnorderedList>
					<ListItem>Author: {commit.author_name}</ListItem>
					<ListItem>Commit sha: {commit.short_id}</ListItem>
					<ListItem>Date: {commit.created_at.toUTCString()}</ListItem>
				</UnorderedList>
			</AccordionPanel>
		</AccordionItem>
	);
}
