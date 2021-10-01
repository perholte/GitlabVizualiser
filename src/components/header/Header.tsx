import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-evenly'
				w='100%'
				mb={0}
				p={8}
				bg={'seagreen'}
				color={'MenuText'}
				minH='15vh'
				maxH='15vh'
			>
				<Link to='/'>
					<Button marginX='1rem' h='3rem' w='full'>
						Home
					</Button>
				</Link>
				<Link to='/branches'>
					<Button marginX='1rem' h='3rem' w='full'>
						Branches
					</Button>
				</Link>
				<Link to='/issues'>
					<Button marginX='1rem' h='3rem' w='full'>
						Issues
					</Button>
				</Link>
				<Link to='/contributors'>
					<Button marginX='1rem' h='3rem' w='full'>
						Contributors
					</Button>
				</Link>
				<Link to='/messages'>
					<Button marginX='1rem' h='3rem' w='full'>
						Commits
					</Button>
				</Link>
			</Flex>
		</>
	);
};

export default Header;
