import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, HStack } from "@chakra-ui/layout";
import { useStyleConfig } from "@chakra-ui/system";
import { ComponentStyleConfig } from "@chakra-ui/theme";
import React from "react";

//TODO: update this type and maybe move it to a 'type' folder
export interface IssueType {
	id: number;
	title: string;
	description: string;
	closed: boolean;
}

interface IssueProps {
	issue: IssueType;
}

const Issue: React.FC<IssueProps> = ({ issue }) => {
	const styles = useStyleConfig("Issue", {
		variant: issue.closed ? "closed" : "open",
	});

	return (
		<AccordionItem sx={styles}>
			<HStack>
				<a href='link to gitlab issue by given id'>
					{/* {'#' + issue.id} */}
					#69
				</a>
				<h2>
					<AccordionButton>
						<Box flex='1' textAlign='left'>
							{/* {issue.title} */}
							Fix some bug
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
			</HStack>
			<AccordionPanel pb={4}>
				{/* {issue.description} */}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</AccordionPanel>
		</AccordionItem>
	);
};
export default Issue;

export const IssueConfig: ComponentStyleConfig = {
	baseStyle: {
		width: "400px",
		height: "4rem",
	},
	variants: {
		open: {
			background: "grey.200", //TODO: change color
		},
		closed: {
			background: "grey.500", //TODO: chance color
		},
	},
};
