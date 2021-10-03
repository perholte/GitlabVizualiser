import { CalendarIcon } from '@chakra-ui/icons';
import {
	Accordion,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Commit, getCommits } from '../../api/index';
import { filterOutCommitsBeforeDate, sortCommitsByDate } from '../../api/utils';
import { ThemeContext as DarkmodeContext } from '../../App';
import '../style/AccordionList.css';
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

/**
 *
 * En samling av commits. Dette komponentet tar inn data fra src/api/index.ts og
 * delegerer denne dataen til en liste med SingleCommitMessage-komponenter. I tilleg,
 * inneholder CommitMessages-komponentet tilstand om antall commits som skal vises
 * og definerer hvor gammel commit-ene som vises maksimalt kan være.
 *
 */
const CommitMessages = () => {
	let dateRef = React.createRef<HTMLDivElement>();
	const { darkmode } = React.useContext(DarkmodeContext);
	let [settings, setSettings] =
		React.useState<CommitMessageQuery>(defualtQuery);
	let [commits, setCommits] = React.useState<Commit[] | undefined>(undefined);
	let [n, setN] = React.useState<number>(0);
	/**
	 * Henter data når siden laster inn i browseren.
	 */
	React.useEffect(() => {
		(async () => {
			let c = await getCommits(undefined);
			if (c) {
				setN(c.length);
				c = filterOutCommitsBeforeDate(c, new Date(settings.date));
			}
			setCommits(c);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const numberChange = (newNumber: any) => {
		setSettings({ ...settings, number: parseInt(newNumber) });
		setCommits(sortCommitsByDate(commits || [], true));
		localStorage.setItem('number-of-commits', newNumber.toString());
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
		let newSettings: CommitMessageQuery = {
			...settings,
			date: date.getTime(),
		};
		setCommits(sortCommitsByDate(commits || [], true));
		localStorage.setItem('commits-since-date', date.getTime().toString());
		setSettings(newSettings);
	};
	return (
		<VStack mt='4rem' className='accordion_list_container'>
			<Heading alignSelf='center'>Commits</Heading>
			<Flex justifyContent='space-between' w='100%' flexWrap='wrap'>
				<FormControl maxW='max-content' mb='1rem'>
					<FormLabel fontWeight='bold' mb='0'>
						Number of commits
					</FormLabel>
					<MyInput
						numberChange={(a) => numberChange(a)}
						value={settings.number || 1}
						maxVal={n || 1}
					/>
				</FormControl>
				<FormControl maxW='max-content'>
					<FormLabel fontWeight='bold' mb='0'>
						Start date
					</FormLabel>
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
				</FormControl>
			</Flex>
			<Text w={'100%'} fontWeight={'bold'}>
				Total number of commits: {commits?.length}
			</Text>
			<Accordion w='100%' allowToggle pb='7vh'>
				{commits
					? filterOutCommitsBeforeDate(
							commits.slice(0, settings.number),
							new Date(settings.date)
					  ).map((c) => (
							<SingleCommitMessage commit={c} key={c.short_id} />
					  ))
					: null}
			</Accordion>
		</VStack>
	);
};

export default CommitMessages;
