import { Accordion } from '@chakra-ui/accordion';
import React from 'react';
import { useQuery } from 'react-query';
import Issue from './Issue';

const IssueList = () => {
	const { data, isLoading, error } = useQuery<Array<any>>('issues', () =>
		fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/issues', {
			headers: {
				'PRIVATE-TOKEN':
					process.env.TEAM_08_ACCESS_TOKENTOKEN ||
					'cYhh3zBz6DtgeJb952WA',
			},
		}).then((res) => res.json())
	);

	if (error || isLoading || !data) {
		return <></>;
	}

	return (
		<Accordion allowMultiple>
			{data.map(
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
							closed: issue.closed_at === null,
						}}
					/>
				)
			)}
		</Accordion>
	);
};

export default IssueList;
