import { getCommits } from '.';

export type ContributionsData = { name: string; commits: number }[];

export const getContributionsData = async (): Promise<ContributionsData> => {
	const commits = await getCommits(0);

	return commits.reduce((acc, current) => {
		const existingEntry = acc.find(
			(entryInAcc) => entryInAcc.name === current.author_name
		);

		if (existingEntry) {
			const updatedEntry = {
				...existingEntry,
				commits: existingEntry.commits + 1,
			};
			return [
				...acc.filter(
					(entryInAcc) => existingEntry.name !== entryInAcc.name
				),
				updatedEntry,
			];
		} else {
			const newEntry = {
				name: current.author_name,
				commits: 1,
			};
			return [...acc, newEntry];
		}
	}, [] as ContributionsData);
};
