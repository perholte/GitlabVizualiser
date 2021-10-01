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
			margin='0 auto'
			mb={8}
			p={8}
			color={'black'}
		>
			<Link className='header-btn' to='/branches'>
				<Button>Branches</Button>
			</Link>
			<Link className='header-btn' to='/issues'>
				<Button>Issues</Button>
			</Link>
			<Link className='header-btn' to='/contributors'>
				<Button>Contributors</Button>
			</Link>
			<Link className='header-btn' to='/messages'>
				<Button>Commits</Button>
			</Link>
			<Box margin={['1em auto', '1em auto', '1em auto', '1em']}>
				<Switch
					isChecked={theme.darkmode}
					onChange={handleToggleTheme}
				/>
			</Box>
		</Flex>
	);
};

export default Header;
