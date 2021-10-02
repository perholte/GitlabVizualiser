import { Center } from '@chakra-ui/react';
import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';
import * as React from 'react';
import { Branch, getBranches } from '../../api';

const BranchTree = () => {
	const options = {
		author: 'employee1',
		template: templateExtend(TemplateName.Metro, {
			commit: {
				message: {
					displayAuthor: false,
					displayHash: false,
				},
			},
		}),
	};
	return (
		<Center flexDirection={'column'} minH='scale(100%-5em)'>
			<svg
				id='graph-container'
				viewBox={`0 0 600 1100`}
				style={{ marginTop: '5em', transform: 'scale(1.2)' }}
			>
				<Gitgraph options={options}>
					{(gitgraph) => {
						getBranches().then((res) => {
							const branches: Array<Branch> = [];
							let master: any;
							const mergedBranches: any = [];

							res.forEach((element) => {
								if (
									element.name === 'main' ||
									element.name === 'master'
								) {
									master = gitgraph
										.branch(element.name)
										.commit('');
								} else {
									branches.push(element);
								}
							});

							branches.forEach((element) => {
								if (element.merged) {
									mergedBranches.push(
										master.branch(element).commit('')
									);
								} else {
									master.branch(element).commit('');
								}
							});
							mergedBranches.forEach((element: any) => {
								master.merge(element, ' ');
							});
						});
					}}
				</Gitgraph>
			</svg>
		</Center>
	);
};
export default BranchTree;
