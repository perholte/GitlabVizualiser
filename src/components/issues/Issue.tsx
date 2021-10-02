import React from 'react';
import marked from 'marked';
import './issues.css';
import parse from 'html-react-parser';
import AccordionListItem from '../common/AccordionListItem';

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
					<span style={{ width: '4ch', textAlign: 'left' }}>
						{'#' + data.id}
					</span>
					{parse(descriptionTitle)}
				</>
			}
			panelChildren={<div>{parse(descriptionContent)}</div>}
			disablePanel={!!data.description}
		></AccordionListItem>
	);
};
export default Issue;
