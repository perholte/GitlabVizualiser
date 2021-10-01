import { Box, Button, Flex, Switch } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext as DarkmodeContext } from '../../App';
import './Header.css';

// This is the default breakpoint
export const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
});

interface HeaderProps {
	handleToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleTheme }) => {
	const theme = useContext(DarkmodeContext);
	const darkmode = theme.darkmode;
	const color = !darkmode ? 'black' : 'green.500';
	return (
		<Flex
			as='nav'
			justify='center'
			align={{
				sm: 'stretch',
				md: 'stretch',
				lg: 'center',
				xl: 'center',
			}}
			direction={['column', 'column', 'column', 'row']}
			wrap='wrap'
			w='100vw'
			margin={'auto'}
			p={8}
			color={'black'}
		>
			<Link className='header-btn' to='/'>
				<Button color={color}>Home</Button>
			</Link>
			<Link className='header-btn' to='/branches'>
				<Button color={color}>Branches</Button>
			</Link>
			<Link className='header-btn' to='/issues'>
				<Button color={color}>Issues</Button>
			</Link>
			<Link className='header-btn' to='/contributors'>
				<Button color={color}>Contributors</Button>
			</Link>
			<Link className='header-btn' to='/messages'>
				<Button color={color}>Commits</Button>
			</Link>
			<Box margin={['1em auto', '1em auto', '1em auto', '1em']}>
				<Switch
					colorScheme='green'
					size={'md'}
					isChecked={theme.darkmode}
					onChange={handleToggleTheme}
				/>
			</Box>
		</Flex>
	);
};

export default Header;
