import * as React from 'react';
import { Commit, getCommits } from '../../api/index';

const NUMBER_OF_COMMITS = 5;

const CommitMessages = () => {
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined);
	React.useEffect(() => {
		const f = async () => {
			let newCommits = await getCommits(NUMBER_OF_COMMITS);
			setCommits(newCommits);
		};
		f();
	});
	return (
		<ul>
			{commits
				? commits.map((c) => {
						return <li key={c.short_id}>{c.title}</li>;
				  })
				: null}
		</ul>
	);
};

export default CommitMessages;
