import { Box, Container, StackDivider, VStack } from '@chakra-ui/react';
import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Commit, getCommits } from '../../api/index';
import Greeting from '../common/Greeting';
import './CommitMessages.css';
import MyInput from './inputs/NumberInput';
import SingleCommitMessage from './singleCommitMessage/SingleCommitMessage';

interface CommitMessageQuery {
	date: Date;
	number: number;
}

const defualtQuery: CommitMessageQuery = {
	number: 1,
	date: new Date(new Date().getTime() - 86400 * 1000),
};

const CommitMessages = () => {
	let dateRef = React.createRef<HTMLDivElement>();
	let [settings, setSettings] =
		React.useState<CommitMessageQuery>(defualtQuery);
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined);
	const fetchCommits: () => Promise<Commit[] | undefined> =
		React.useCallback(async () => {
			try {
				return await getCommits(settings.number);
			} catch (err) {
				console.error(err);
			}
			return undefined;
		}, [settings.number]);
	React.useEffect(() => {
		(async () => {
			let c = await fetchCommits();
			if (c) {
				c = sortAndFilterCommits(c);
			} else {
				console.log('fuuu');
			}
			setCommits(c);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchCommits, settings.date]);
	function sortAndFilterCommits(commits: Commit[]): Commit[] {
		// Sort commits in ascending order with respect to date
		commits.sort((a, b) => {
			let t0 = a.created_at.getTime();
			let t1 = b.created_at.getTime();
			return t0 > t1 ? 1 : -1;
		});
		// Filter out commits that are older than the user specified date
		// console.log(commits.map((c) => c.created_at))
		commits = commits.filter(
			(c) => c.created_at.getTime() > settings.date.getTime()
		);
		return commits;
	}
	const numberChange = (newNumber: any) => {
		setSettings({ ...settings, number: parseInt(newNumber) });
		(async () => {
			let c = await fetchCommits();
			if (c) {
				c = sortAndFilterCommits(c);
			} else {
				console.log('fuuu');
			}
			setCommits(c);
		})();
	};
	const updateDate = (newDate: any) => {
		let date;
		if (newDate instanceof Date) {
			date = newDate;
		} else {
			date = new Date(
				new Date().getTime() + newDate?.timeStamp ||
					new Date().getTime()
			);
		}
		let newSettings: CommitMessageQuery = {
			...settings,
			date,
		};
		setSettings(newSettings);
	};
	return (
		<VStack id='Commit-messages-container'>
			<Greeting />
			<Container
				ref={dateRef}
				maxW={'container.lg'}
				margin={'5em auto'}
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'center'}
				width={'100vw'}
			>
				<Box margin={'auto'}>
					<h1>
						<b>Antall commits</b>
					</h1>
					<MyInput
						numberChange={(a) => numberChange(a)}
						value={settings.number}
					/>
				</Box>
				<Box margin={'auto'}>
					<h1>
						<b>Commits siden dato</b>
					</h1>
					<DateTimePicker
						ref={dateRef}
						disableCalendar={false}
						minDate={new Date(163283426645)}
						format={'dd.MM.y'}
						clearIcon={null}
						className={'My-styled-date-picker'}
						onChange={(evt: any) => updateDate(evt)}
						value={settings.date}
					/>
				</Box>
			</Container>
			<VStack
				divider={<StackDivider borderColor={'gray.200'} />}
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
		</VStack>
	);
};

export default CommitMessages;
