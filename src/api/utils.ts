import { getCommits } from '.';

export type ContributionsData = { name: string; commits: number }[];

// Had some issues where we had mulitple git names. This filters out the ones we dont want.
const BLACKLIST = ['Jorre', 'Jørgen', 'Per Holte'];

export const getContributionsData = async (): Promise<ContributionsData> => {
	const commits = await getCommits(0);

	return commits.reduce((acc, current) => {
		if (BLACKLIST.indexOf(current.author_name) !== -1) {
			return acc;
		}
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
