import { Route, Switch } from 'react-router-dom';
import './App.css';
import BranchTree from './components/branchTree/BranchTree';
import Contributions from './components/contributions/Contributions';
import Header from './components/header/Header';
import IssueList from './components/issues/IssueList';
import Frontpage from './components/frontpage/Frontpage';

function App() {
	return (
		<>
			<Header />
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
					{/*<BranchTree/>*/}
					<p>Commit messages</p>
				</Route>
				<Route path='/'>
					<Frontpage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
