import { Route, Switch } from 'react-router-dom';
import './App.css';
import BranchTree from './components/branchTree/BranchTree';
import Header from './components/Header/Header';
import IssueList from './components/issues/IssueList';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/branches'>
					<BranchTree />
					<p>Branches</p>
				</Route>
				<Route path='/issues'>
					<IssueList />
				</Route>
				<Route path='/Contributors'>
					{/*<BranchTree/>*/}
					<p>Contributors</p>
				</Route>
				<Route path='/messages'>
					{/*<BranchTree/>*/}
					<p>Commit messages</p>
				</Route>
				<Route path='/'>
					<p>Hjem</p>
				</Route>
			</Switch>
		</>
	);
}

export default App;
