import { Flex, Heading } from '@chakra-ui/layout';
import { FC } from 'react';

const Frontpage: FC = () => {
	return (
		<Flex
			minH='85vh'
			maxH='85vh'
			justifyContent='center'
			alignItems='center'
			backgroundColor='Highlight'
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
