import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				w='100%'
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
			</Flex>
		</>
	)
}

export default Header
