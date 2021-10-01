import { Text } from '@chakra-ui/layout';
import { FC } from 'react';

const Greeting: FC = () => {
	return !!sessionStorage.getItem('name') ? (
		<Text color='HighlightText' fontFamily='cursive'>
			Hello {sessionStorage.getItem('name')}
		</Text>
	) : (
		<></>
	);
};

export default Greeting;
