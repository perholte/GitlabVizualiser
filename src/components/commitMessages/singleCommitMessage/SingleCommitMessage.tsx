import React from 'react';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { Commit } from '../../../api';
import AccordionListItem from '../../common/AccordionListItem';
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
	return (
		<AccordionListItem
			buttonChildren={
				<Heading
					textAlign='left'
					fontSize='1rem'
					overflow='hidden'
					textOverflow='ellipsis'
					whiteSpace='nowrap'
				>
					{commit.title}
				</Heading>
			}
			panelChildren={
				<UnorderedList>
					<ListItem>Author: {commit.author_name}</ListItem>
					<ListItem>Commit sha: {commit.short_id}</ListItem>
					<ListItem>Date: {commit.created_at.toUTCString()}</ListItem>
				</UnorderedList>
			}
		/>
	);
}
