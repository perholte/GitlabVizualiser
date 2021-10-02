import { Text } from '@chakra-ui/layout';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../App';
import './Greeting.css';

const Greeting: FC = () => {
	const theme = useContext(ThemeContext);
	const darkmode = theme.darkmode;
	const name = sessionStorage.getItem('name');
	let mode = darkmode ? 'dark' : 'light';
	return (
		<Text className={`greeting ${mode}`}>Hello {name || 'Stranger'}!</Text>
	);
};

export default Greeting;
