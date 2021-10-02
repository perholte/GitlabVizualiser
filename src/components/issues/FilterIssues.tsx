import { FormLabel, Select, Box } from '@chakra-ui/react';
import React from 'react';

export enum IssueFilter {
	All = 'All',
	Closed = 'Closed',
	Open = 'Open',
}

interface FilterIssuesProps {
	updateFilter: (newFilter: IssueFilter) => void;
	activeFilter: IssueFilter;
}

const FilterIssues: React.FC<FilterIssuesProps> = ({
	updateFilter,
	activeFilter,
}) => {
	return (
		<Box w='200px'>
			<FormLabel for='filterIssues'>Filter issues:</FormLabel>
			<Select
				value={activeFilter}
				id='filterIssues'
				onChange={(e) => updateFilter(e.target.value as IssueFilter)}
			>
				{Object.values(IssueFilter).map((filter) => (
					<option value={filter}>{filter}</option>
				))}
			</Select>
		</Box>
	);
};

export default FilterIssues;
