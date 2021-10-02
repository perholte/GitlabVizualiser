import React from 'react';
import marked from 'marked';
import parse from 'html-react-parser';
import AccordionListItem from '../common/AccordionListItem';
import { Text } from '@chakra-ui/layout';

//TODO: update this type and maybe move it to a 'type' folder
export interface IssueType {
	id: number;
	title: string;
	description: string;
	closed: boolean;
}

interface IssueProps {
	data: IssueType;
}

const Issue: React.FC<IssueProps> = ({ data }) => {
	const descriptionContent = marked(data.description);
	const descriptionTitle = marked(data.title);

	return (
		<AccordionListItem
			buttonChildren={
				<>
					<span
						style={{
							width: '4ch',
							textAlign: 'left',
						}}
					>
						{'#' + data.id}
					</span>
					<Text textAlign='left'>{parse(descriptionTitle)}</Text>
				</>
			}
			panelChildren={<div>{parse(descriptionContent)}</div>}
			disablePanel={!data.description}
			variant={data.closed ? 'closed' : 'open'}
		></AccordionListItem>
	);
};
export default Issue;
