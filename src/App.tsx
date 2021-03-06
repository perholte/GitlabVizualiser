import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BranchTree from './components/branchTree/BranchTree';
import CommitMessages from './components/commitMessages/CommitMessages';
import Contributions from './components/contributions/Contributions';
import Frontpage from './components/frontpage/Frontpage';
import Header from './components/header/Header';
import IssueList from './components/issues/IssueList';

export const ThemeContext = React.createContext({ darkmode: false });

function App() {
	const [darkmode, setDarkmode] = useState<boolean>(() =>
		JSON.parse(localStorage.getItem('darkmode') ?? 'false')
	);
	useEffect(() => {
		localStorage.setItem('darkmode', JSON.stringify(darkmode));

		const root = document.getElementById('root');
		if (root) {
			root.className = darkmode ? 'dark' : 'light';
		}
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
				<Route path='/contributors'>
					<Contributions />
				</Route>
				<Route path='/commits'>
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
