import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Branch, getBranches } from './api/index'
import './App.css'
import BranchTree from './components/branchTree/BranchTree'
import CommitMessages from './components/commitMessages/CommitMessages'

function App() {
	async function test() {
		try {
			let c: Branch[] = await getBranches()
			if (c) {
				console.log(c)
			}
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<ChakraProvider>
			<p>Hello World!</p>
			<button onClick={test}>click</button>
			<BranchTree></BranchTree>
			<CommitMessages />
		</ChakraProvider>
	)
}

export default App
