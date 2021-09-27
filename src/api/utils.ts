//import { getCommits } from "api";

export type ContributionsData = { name: string; commits: number }[];

export const getContributionsData = (): ContributionsData => {
  return [
    { name: "Dev1", commits: 5 },
    { name: "Dev2", commits: 70 },
    { name: "Dev3", commits: 10 },
    { name: "Dev4", commits: 30 },
    { name: "Dev5", commits: 50 },
  ];
  /*const commits = getCommits;
  return commits.reduce((acc, current) => {
    const existingEntry = acc.find(
      (entryInAcc) => entryInAcc.author === current.author_name
    );

    if (existingEntry) {
      const updatedEntry = {
        ...existingEntry,
        commits: existingEntry.commits + 1,
      };
      return [
        ...acc.filter(
          (entryInAcc) => existingEntry.author !== entryInAcc.author
        ),
        updatedEntry,
      ];
    } else {
      const newEntry = {
        name: existingEntry.author_name,
        commits: 1,
      };
      return [...acc, newEntry];
    }
  }, [] as ContributionsData);*/
};
