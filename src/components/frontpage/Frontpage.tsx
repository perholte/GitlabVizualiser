import { Center, Heading } from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { FC, FormEventHandler, useContext, useState } from 'react';
import { ThemeContext } from '../../App';

const Frontpage: FC<{}> = () => {
	const [name, setName] = useState<string>();
	const [rerender, setRerender] = useState<boolean>(false);

	const hasName = () => {
		return sessionStorage.getItem('name');
	};

	const storeName: FormEventHandler = (event) => {
		sessionStorage.setItem('name', name!);
		setRerender(!rerender);
	};
	const theme = useContext(ThemeContext);
	const darkmode = theme.darkmode;
	let bg = darkmode ? 'black' : 'green.500';
	let color = !darkmode ? 'black' : 'green.500';
	return (
		<Center
			minH='85vh'
			maxH='85vh'
			flexDir='column'
			backgroundColor={darkmode ? 'black' : 'Highlight'}
			color='HighlightText'
			fontFamily='heading'
		>
			<Heading
				color={color}
				justifyContent='center'
				textAlign='center'
				size='4xl'
			>
				GitLabViz
			</Heading>
			{!hasName() ? (
				<form
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						color,
					}}
					onSubmit={storeName}
				>
					<FormControl margin={3}>
						<FormLabel>Enter your name</FormLabel>
						<Input
							focusBorderColor={darkmode ? '#fff' : 'green.500'}
							isRequired
							type='text'
							onChange={(event: any) =>
								setName(event.target.value)
							}
						></Input>
					</FormControl>
					<Button type='submit' color={color}>
						Submit name
					</Button>
				</form>
			) : (
				<p style={{ color: darkmode ? '#38A169' : '#000' }}>
					Your name will be displayed on the different pages :)
				</p>
			)}
		</Center>
	);
};

export default Frontpage;
