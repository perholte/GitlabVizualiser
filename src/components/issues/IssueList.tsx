import { Accordion } from '@chakra-ui/accordion';
import { Stack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import FilterIssues, { IssueFilter } from './FilterIssues';
import Issue from './Issue';
import '../style/AccordionList.css';

const IssueList: React.FC = () => {
	const { data, isLoading, error } = useQuery<Array<any>>('issues', () =>
		fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/issues', {
			headers: {
				'PRIVATE-TOKEN':
					process.env.REACT_APP_TEAM_08_ACCESS_TOKEN || 'NO TOKEN',
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
		return <></>;
	}

	return (
		<Stack spacing='5' pt='4rem' className='accordion_list_container'>
			<FilterIssues
				activeFilter={activeFilter}
				updateFilter={setActiveFilter}
			/>
			<Accordion allowToggle pb='7vh'>
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
			</Accordion>
		</Stack>
	);
};

export default IssueList;
