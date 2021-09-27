import React from "react";
import { useQuery } from "react-query";
import Issue from "./Issue";

const IssueList = () => {
	const { data, isLoading, error } = useQuery<any>("issues", () => {
		fetch(
			"https://gitlab.stud.idi.ntnu.no/api/v4/projects/11994/issues"
		).then((res) => res.json());
	});

	if (error || isLoading || !data) {
		return <></>;
	}

	return (
		<>
			{data.map(
				(issue: {
					iid: number;
					title: string;
					description: string;
					closed_at: string | null;
				}) => (
					<Issue
						data={{
							id: issue.iid,
							title: issue.title,
							description: issue.description,
							closed: issue.closed_at === null,
						}}
					/>
				)
			)}
		</>
	);
};

export default IssueList;
