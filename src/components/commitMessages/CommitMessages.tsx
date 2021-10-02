import { CalendarIcon } from '@chakra-ui/icons';
import {
	Accordion,
	Box,
	Flex,
	FormControl,
	FormLabel,
	VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Commit, getCommits } from '../../api/index';
import { filterOutCommitsBeforeDate, sortCommitsByDate } from '../../api/utils';
import { ThemeContext as DarkmodeContext } from '../../App';
import './CommitMessages.css';
import MyInput from './inputs/NumberInput';
import SingleCommitMessage from './singleCommitMessage/SingleCommitMessage';
import '../style/AccordionList.css';

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
		let newSettings: CommitMessageQuery = {
			...settings,
			date: date.getTime(),
		};
		localStorage.setItem('commits-since-date', date.getTime().toString());
		setSettings(newSettings);
	};
	return (
		<VStack mt='4rem' className='accordion_list_container'>
			<Flex justifyContent='space-between' w='100%' flexWrap='wrap'>
				<FormControl maxW='max-content' mb='1rem'>
					<FormLabel fontWeight='bold' mb='0'>
						Number of commits
					</FormLabel>
					<MyInput
						numberChange={(a) => numberChange(a)}
						value={settings.number}
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

			<Accordion w='100%' allowToggle pb='7vh'>
				{commits
					? commits.map((c) => (
							<SingleCommitMessage commit={c} key={c.short_id} />
					  ))
					: null}
			</Accordion>
		</VStack>
	);
};

export default CommitMessages;
