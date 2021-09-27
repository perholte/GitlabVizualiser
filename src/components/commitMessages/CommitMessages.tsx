import { Container, Input, StackDivider, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { Commit, getCommits } from '../../api/index'
import SingleCommitMessage from './singleCommitMessage/SingleCommitMessage'

const NUMBER_OF_COMMITS = 5

const EXAMPLE_COMMITS = [
	{
		title: 'README.md',
		author_name: 'Per',
		short_id: '1',
		created_at: new Date(),
	},
	{
		title: 'App.tsx',
		author_name: 'Jørgen',
		short_id: '2',
		created_at: new Date(),
	},
	{
		title: 'Components',
		author_name: 'André',
		short_id: '3',
		created_at: new Date(),
	},
	{
		title: '.gitignore',
		author_name: 'Sigbjørn',
		short_id: '4',
		created_at: new Date(),
	},
]

interface CommitMessageQuery {
	beforeDate?: Date
	afterDate?: Date
	number?: number
}

const CommitMessages = () => {
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined)
	let [settings, setSettings] = React.useState(undefined)
	React.useEffect(() => {
		const f = async () => {
			try {
				let newCommits = await getCommits(NUMBER_OF_COMMITS)
				setCommits(newCommits)
			} catch (err) {
				setCommits(EXAMPLE_COMMITS)
			}
		}
		f()
		console.log(commits?.length)
	}, [])
	return (
		<>
			<Container margin='5em auto'>
				<Input />
			</Container>
			<VStack
				divider={<StackDivider borderColor='gray.200' />}
				spacing={4}
				align='center'
				margin={'auto'}
			>
				{commits
					? commits.map((c) => <SingleCommitMessage commit={c} />)
					: null}
			</VStack>
		</>
	)
}

export default CommitMessages
