import { Flex, Heading } from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC, FormEventHandler, useState } from 'react';

const Frontpage: FC = () => {
	const [name, setName] = useState<string>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	const storeName: FormEventHandler = (event) => {
		event.preventDefault();
		sessionStorage.setItem('name', name!);
		setSubmitted(true);
	};

	return (
		<Flex
			minH='85vh'
			maxH='85vh'
			flexDir='column'
			justifyContent='center'
			alignItems='center'
			backgroundColor='Highlight'
			color='HighlightText'
			fontFamily='heading'
		>
			<Heading justifyContent='center' textAlign='center' size='4xl'>
				GitLabViz
			</Heading>
			{!submitted ? (
				<form onSubmit={storeName}>
					<FormControl>
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
		</Flex>
	);
};

export default Frontpage;
