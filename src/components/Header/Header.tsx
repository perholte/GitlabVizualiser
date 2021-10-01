import React from 'react';
import { Button, Flex, Switch } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	handleToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleTheme }) => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			w='100%'
			mb={8}
			p={8}
			bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
			color={['black', 'black', 'black', 'black']}
		>
			<Link to='/branches'>
				<Button>Branches</Button>
			</Link>
			<Link to='/issues'>
				<Button>Issues</Button>
			</Link>
			<Link to='/contributors'>
				<Button>Contributors</Button>
			</Link>
			<Link to='/messages'>
				<Button>Commit messages</Button>
			</Link>
			<Switch isChecked={false} onChange={() => handleToggleTheme} />
		</Flex>
	);
};

export default Header;
