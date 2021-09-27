import { Container } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { Commit } from '../../../api'

export interface CommitMessageProps {
	commit: Commit
}

const TimeFormatOptions = {
	weekday: undefined,
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

export default function SingleCommitMessage({ commit }: CommitMessageProps) {
	return (
		<Container
			key={commit.short_id}
			variant={'components'}
			centerContent
			maxW='container.lg'
			bg={'#edf2f7'}
			borderRadius={10}
			flexDirection='row'
			padding='10'
			justifyContent='center'
		>
			<Box className='s' margin='auto'>
				Commit: {commit.title}
			</Box>
			<Box className='s' margin='auto'>
				By: {commit.author_name}
			</Box>
			<Box className='s' margin='auto'>
				Hash: {commit.short_id}
			</Box>
			<Box className='s' margin='auto'>
				Time: {commit.created_at.toLocaleDateString('en-US')}
			</Box>
		</Container>
	)
}
