import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	HStack,
	IconButton,
	Stack,
	Switch,
	useDisclosure,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext as DarkmodeContext } from '../../App';
import './Header.css';

interface HeaderProps {
	handleToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleTheme }) => {
	const { darkmode } = useContext(DarkmodeContext);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<Flex
				h={'5em'}
				justifyContent='space-between'
				py='1rem'
				bg={darkmode ? 'seagreen' : 'white'}
				alignItems='center'
				px='5%'
			>
				<Heading
					fontSize='1.5rem'
					w='7rem'
					color={darkmode ? 'white' : 'seagreen'}
				>
					GitLabViz
				</Heading>

				<HStack
					as='nav'
					spacing='10'
					alignItems='center'
					// the following line works as a media query,
					// when screen width is larger than lg (62 rem) display is set to 'flex', otherwise 'none'
					display={{ base: 'none', lg: 'flex' }}
				>
					<Link className='header-btn' to='/'>
						<Button>Home</Button>
					</Link>
					<Link className='header-btn' to='/branches'>
						<Button>Branches</Button>
					</Link>
					<Link className='header-btn' to='/issues'>
						<Button>Issues</Button>
					</Link>
					<Link className='header-btn' to='/contributors'>
						<Button>Contributors</Button>
					</Link>
					<Link className='header-btn' to='/commits'>
						<Button>Commits</Button>
					</Link>
				</HStack>

				<Center w='7rem'>
					<Switch
						isChecked={darkmode}
						onChange={handleToggleTheme}
						colorScheme='whiteAlpha'
					/>
				</Center>

				<IconButton
					transitionDuration='0'
					display={{ lg: 'none' }}
					size={'md'}
					bgColor={darkmode ? 'seagreen' : 'white'}
					color={darkmode ? 'white' : 'seagreen'}
					aria-label={'Open Menu'}
					onClick={isOpen ? onClose : onOpen}
					icon={
						isOpen ? (
							<CloseIcon boxSize='1em' />
						) : (
							<HamburgerIcon boxSize='1.5em' />
						)
					}
				/>
			</Flex>
			{isOpen && (
				<Box pb={4} display={{ lg: 'none' }}>
					<Stack as={'nav'} spacing={2} pl='0.5em' pt='1rem'>
						<Link className='header-btn' to='/'>
							<Button onClick={onClose}>Home</Button>
						</Link>
						<Link className='header-btn' to='/branches'>
							<Button onClick={onClose}>Branches</Button>
						</Link>
						<Link className='header-btn' to='/issues'>
							<Button onClick={onClose}>Issues</Button>
						</Link>
						<Link className='header-btn' to='/contributors'>
							<Button onClick={onClose}>Contributors</Button>
						</Link>
						<Link className='header-btn' to='/commits'>
							<Button onClick={onClose}>Commits</Button>
						</Link>
					</Stack>
				</Box>
			)}
		</Box>
	);
};

export default Header;
