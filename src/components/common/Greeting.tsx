import { Text } from '@chakra-ui/layout';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../App';

const Greeting: FC = () => {
	const theme = useContext(ThemeContext);
	const darkmode = theme.darkmode;
	let color = !darkmode ? 'black' : 'green.500';
	return !!sessionStorage.getItem('name') ? (
		<Text color={color} textAlign={'center'} margin='2em auto'>
			Hello {sessionStorage.getItem('name')}
		</Text>
	) : (
		<></>
	);
};

export default Greeting;
