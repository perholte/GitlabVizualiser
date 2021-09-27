import React from 'react';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import IssueList from './components/issues/IssueList';

function App() {
	return (
		<ChakraProvider>
			<p>Hello World!</p>
			<IssueList />
		</ChakraProvider>
	);
}

export default App;
