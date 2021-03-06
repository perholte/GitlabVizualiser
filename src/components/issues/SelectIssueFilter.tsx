import { FormLabel, Select, FormControl } from '@chakra-ui/react';
import React from 'react';

export enum IssueFilter {
	All = 'All',
	Closed = 'Closed',
	Open = 'Open',
}

interface SelectIssueFilterProps {
	updateFilter: (newFilter: IssueFilter) => void;
	activeFilter: IssueFilter;
}

const SelectIssueFilter: React.FC<SelectIssueFilterProps> = ({
	updateFilter,
	activeFilter,
}) => {
	return (
		<FormControl w='200px'>
			<FormLabel>Filter issues:</FormLabel>
			<Select
				value={activeFilter}
				onChange={(e) => updateFilter(e.target.value as IssueFilter)}
			>
				{Object.values(IssueFilter).map((filter) => (
					<option value={filter} key={filter}>
						{filter}
					</option>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectIssueFilter;
