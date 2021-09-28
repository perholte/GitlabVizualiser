import { Route, Switch } from 'react-router-dom'
import './App.css'
import BranchTree from './components/branchTree/BranchTree'
import CommitMessages from './components/commitMessages/CommitMessages'
import Contributions from './components/contributions/Contributions'
import Header from './components/Header/Header'
import IssueList from './components/issues/IssueList'

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
					<CommitMessages />
				</Route>
				<Route path='/'>
					<h1 style={{ textAlign: 'center' }}>
						Tissegutta uwu(′ꈍωꈍ‵)
					</h1>
				</Route>
			</Switch>
		</>
	)
}

export default App
