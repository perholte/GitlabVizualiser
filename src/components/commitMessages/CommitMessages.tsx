import { CalendarIcon } from '@chakra-ui/icons';
import {
	Accordion,
	Box,
	Container,
	StackDivider,
	VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Commit, getCommits } from '../../api/index';
import { filterOutCommitsBeforeDate, sortCommitsByDate } from '../../api/utils';
import { ThemeContext as DarkmodeContext } from '../../App';
import Greeting from '../common/Greeting';
import './CommitMessages.css';
import MyInput from './inputs/NumberInput';
import SingleCommitMessage from './singleCommitMessage/SingleCommitMessage';

interface CommitMessageQuery {
	date: number;
	number: number;
}

const defualtQuery: CommitMessageQuery = {
	number: parseInt(localStorage.getItem('number-of-commits') || '1'),
	date: parseInt(
		localStorage.getItem('commits-since-date') ||
			new Date().getTime().toString()
	),
};

const CommitMessages = () => {
	let dateRef = React.createRef<HTMLDivElement>();
	const { darkmode } = React.useContext(DarkmodeContext);
	let [settings, setSettings] =
		React.useState<CommitMessageQuery>(defualtQuery);
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined);
	const fetchCommits: () => Promise<Commit[] | undefined> =
		React.useCallback(async () => {
			try {
				const c = await getCommits(settings.number);
				return c;
			} catch (err) {
				console.error(err);
			}
			return undefined;
		}, [settings.number]);

	React.useEffect(() => {
		(async () => {
			let c = await fetchCommits();
			if (c) {
				c = filterOutCommitsBeforeDate(c, new Date(settings.date));
			}
			setCommits(c);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchCommits, settings.date]);

	const numberChange = (newNumber: any) => {
		setSettings({ ...settings, number: parseInt(newNumber) });
		localStorage.setItem('number-of-commits', newNumber.toString());
		(async () => {
			let c = await fetchCommits();
			if (c) {
				console.log(c.map((c) => c.created_at.getDate()).join(', '));
				c = sortCommitsByDate(c, true);
				c = filterOutCommitsBeforeDate(c, new Date(settings.date));
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
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		console.log(commits);
		let newSettings: CommitMessageQuery = {
			...settings,
			date: date.getTime(),
		};
		localStorage.setItem('commits-since-date', date.getTime().toString());
		setSettings(newSettings);
	};
	return (
		<VStack id='Commit-messages-container'>
			<Greeting />
			<Container
				ref={dateRef}
				maxW={'container.lg'}
				minW={['4em']}
				margin={'5em auto'}
				display={'flex'}
				flexDirection={['column', 'row', 'row', 'row']}
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
						maxDate={new Date()}
						format={'dd.MM.y'}
						clearIcon={null}
						calendarIcon={
							<CalendarIcon
								margin={'auto .5em'}
								color={darkmode ? 'white' : 'black'}
							/>
						}
						className={'My-styled-date-picker Commit-message-input'}
						onChange={(evt: any) => updateDate(evt)}
						value={new Date(settings.date)}
					/>
				</Box>
			</Container>
			<VStack
				divider={<StackDivider borderColor={'gray.200'} />}
				spacing={4}
				align='center'
				margin={'2em auto'}
			>
				<Accordion
					margin={'2em auto'}
					allowMultiple={false}
					allowToggle={true}
				>
					{commits
						? commits.map((c) => (
								<SingleCommitMessage
									commit={c}
									key={c.short_id}
								/>
						  ))
						: null}
				</Accordion>
			</VStack>
		</VStack>
	);
};

export default CommitMessages;
