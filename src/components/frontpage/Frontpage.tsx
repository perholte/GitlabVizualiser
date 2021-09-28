import { Flex, Heading } from '@chakra-ui/layout';
import { FC } from 'react';

const Frontpage: FC = () => {
	return (
		<Flex
			minH='75vh'
			maxH='75vh'
			justifyContent='center'
			alignItems='center'
			backgroundColor='Highlight'
			color='HighlightText'
			fontFamily='heading'
			marginTop={20}
		>
			<Heading justifyContent='center' textAlign='center' size='4xl'>
				GitLabViz
			</Heading>
		</Flex>
	);
};

export default Frontpage;
