import { Center } from '@chakra-ui/react';
import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';
import * as React from 'react';
import { Branch, getBranches } from '../../api';

class BranchTree extends React.Component {
	render() {
		/**
		 * Passing these options in to the gitgraph.
		 */

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
				{/**
				 * The gitgraph component returns an unaccessible svg element, so we wrap the gitgraph svg inside an svg tag,
				 * so that we can scale it.
				 */}
				<svg
					id='graph-container'
					viewBox={`0 0 600 1000`}
					style={{ marginTop: '5em', transform: 'scale(1.2)' }}
				>
					<Gitgraph options={options}>
						{(gitgraph) => {
							getBranches().then((res) => {
								const branches: Array<Branch> = [];
								let master: any;
								const mergedBranches: Array<Branch> = [];
								const activeBranches: Array<Branch> = [];

								/**
								 * We take the data from the response, and add it to a list depending on if
								 * it is merged or not, and then we return them in the format gitgraph understands.
								 */

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
									if (!element.merged) {
										activeBranches.push(element);
									} else {
										mergedBranches.push(
											master.branch(element).commit('')
										);
									}
								});
								activeBranches.forEach((element: any) => {
									master.branch(element.name).commit('');
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
	}
}
export default BranchTree;
