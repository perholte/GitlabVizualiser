import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BranchTree from './components/branchTree/BranchTree';
import CommitMessages from './components/commitMessages/CommitMessages';
import Contributions from './components/contributions/Contributions';
import IssueList from './components/issues/IssueList';
import Header from './components/header/Header';
import Frontpage from './components/frontpage/Frontpage';

export const ThemeContext = React.createContext({ darkmode: false });

function App() {
	const [darkmode, setDarkmode] = useState<boolean>(() =>
		JSON.parse(localStorage.getItem('darkmode') ?? 'false')
	);

	useEffect(() => {
		localStorage.setItem('darkmode', JSON.stringify(darkmode));
	}, [darkmode]);

	return (
		<ThemeContext.Provider value={{ darkmode: darkmode }}>
			<Header handleToggleTheme={() => setDarkmode(!darkmode)} />
			<Switch>
				<Route path='/branches'>
					<BranchTree />
				</Route>
				<Route path='/issues'>
					<IssueList />
				</Route>
				<Route path='/Contributors'>
					<Contributions />
				</Route>
				<Route path='/messages'>
					<CommitMessages />
				</Route>
				<Route path='/'>
					<Frontpage />
				</Route>
			</Switch>
		</ThemeContext.Provider>
	);
}

export default App;
