import { Accordion } from '@chakra-ui/accordion';
import { VStack, Stack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Greeting from '../common/Greeting';
import FilterIssues, { IssueFilter } from './FilterIssues';
import Issue from './Issue';
import './issues.css';

const IssueList: React.FC = () => {
	const { data, isLoading, error } = useQuery<Array<any>>('issues', () =>
		fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/issues', {
			headers: {
				'PRIVATE-TOKEN':
					process.env.TEAM_08_ACCESS_TOKENTOKEN ||
					'cYhh3zBz6DtgeJb952WA',
			},
		}).then((res) => res.json())
	);

	const [filteredIssues, setFilteredIssues] = useState<Array<any>>(
		data || []
	);
	const [activeFilter, setActiveFilter] = useState<IssueFilter>(
		IssueFilter.All
	);

	useEffect(() => {
		let updatedIssues;
		if (activeFilter === IssueFilter.Open) {
			updatedIssues = data?.filter((issue) => !issue.closed_at);
		} else if (activeFilter === IssueFilter.Closed) {
			updatedIssues = data?.filter((issue) => !!issue.closed_at);
		} else {
			updatedIssues = data;
		}
		setFilteredIssues(updatedIssues || []);
	}, [activeFilter, data]);

	if (error || isLoading || !data) {
		return <Greeting />;
	}

	return (
		<>
			<Greeting />
			<Stack id='issue_list_container' spacing='5'>
				<FilterIssues
					activeFilter={activeFilter}
					updateFilter={setActiveFilter}
				/>
				<Accordion allowMultiple={false} allowToggle={true} pb='7vh'>
					<VStack>
						{filteredIssues.map(
							(issue: {
								iid: number;
								title: string;
								description: string;
								closed_at: string | null;
							}) => (
								<Issue
									key={issue.iid}
									data={{
										id: issue.iid,
										title: issue.title,
										description: issue.description,
										closed: !!issue.closed_at,
									}}
								/>
							)
						)}
					</VStack>
				</Accordion>
			</Stack>
		</>
	);
};

export default IssueList;
