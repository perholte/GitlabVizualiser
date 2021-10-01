import { Center, Heading } from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC, FormEventHandler, useState } from 'react';

const Frontpage: FC = () => {
	const [name, setName] = useState<string>();
	const [rerender, setRerender] = useState<boolean>(false);

	const hasName = () => {
		return sessionStorage.getItem('name');
	};

	const storeName: FormEventHandler = (event) => {
		sessionStorage.setItem('name', name!);
		setRerender(!rerender);
	};

	return (
		<Center
			minH='85vh'
			maxH='85vh'
			flexDir='column'
			backgroundColor='Highlight'
			color='HighlightText'
			fontFamily='heading'
		>
			<Heading justifyContent='center' textAlign='center' size='4xl'>
				GitLabViz
			</Heading>
			{!hasName() ? (
				<form onSubmit={storeName}>
					<FormControl margin={3}>
						<FormLabel>Enter your name</FormLabel>
						<Input
							isRequired
							type='text'
							placeholder='Your name here'
							onChange={(event) => setName(event.target.value)}
						></Input>
					</FormControl>
					<Button type='submit'>Submit name</Button>
				</form>
			) : (
				<p>Your name will be displayed on the different pages :)</p>
			)}
		</Center>
	);
};

export default Frontpage;
