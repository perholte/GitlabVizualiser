import { Button, Flex } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { useContext } from 'react'
import { Link, Switch } from 'react-router-dom'
import { ThemeContext as DarkmodeContext } from '../../App'
import './Header.css'

// This is the default breakpoint
export const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
})

interface HeaderProps {
	handleToggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ handleToggleTheme }) => {
	const theme = useContext(DarkmodeContext)
	return (
		<>
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
				margin='auto'
				mb={8}
				p={8}
				bg={[
					'primary.500',
					'primary.500',
					'transparent',
					'transparent',
				]}
				color={['black', 'black', 'black', 'black']}
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
					<Button>Commit messages</Button>
				</Link>
				<Switch
					isChecked={theme.darkmode}
					onChange={handleToggleTheme}
				/>
			</Flex>
		</>
	)
}

export default Header
