import { Container, StackDivider, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { Commit, getCommits } from '../../api/index'
import MyInput from './inputs/NumberInput'
import SingleCommitMessage from './singleCommitMessage/SingleCommitMessage'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CommitMessageQuery {
	beforeDate?: Date
	afterDate?: Date
	number: number
}

const defualtQuery: CommitMessageQuery = {
	number: 5,
}

const CommitMessages = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let [settings, setSettings] =
		React.useState<CommitMessageQuery>(defualtQuery)
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined)
	const fetchCommits = async () => {
		try {
			let n = settings.number - 1 > 0 ? settings.number - 1 : 1
			let newCommits = await getCommits(n)
			setCommits(newCommits)
		} catch (err) {
			console.error(err)
		}
	}
	React.useEffect(() => {
		fetchCommits()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const numberChange = (newNumber: any) => {
		setSettings({ ...settings, number: newNumber })
		;(async () => {
			await fetchCommits()
		})()
	}
	return (
		<>
			<Container margin='5em auto'>
				<MyInput
					numberChange={(a) => numberChange(a)}
					value={settings.number}
				/>
			</Container>
			<VStack
				divider={<StackDivider borderColor='gray.200' />}
				spacing={4}
				align='center'
				margin={'auto'}
			>
				{commits
					? commits.map((c) => (
							<SingleCommitMessage commit={c} key={c.short_id} />
					  ))
					: null}
			</VStack>
		</>
	)
}

export default CommitMessages
