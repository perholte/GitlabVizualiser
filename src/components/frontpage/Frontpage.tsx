import { Flex, Heading } from '@chakra-ui/layout';
import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../App';

const Frontpage: FC = () => {
	const theme = useContext(ThemeContext);
	const darkmode = theme.darkmode;

	return (
		<Flex
			minH='85vh'
			maxH='85vh'
			justifyContent='center'
			alignItems='center'
			backgroundColor={darkmode ? 'black' : 'Highlight'}
			color='HighlightText'
			fontFamily='heading'
		>
			<Heading justifyContent='center' textAlign='center' size='4xl'>
				GitLabViz
			</Heading>
		</Flex>
	);
};

export default Frontpage;
