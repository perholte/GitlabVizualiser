import { Center, Heading } from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { FC, FormEventHandler, useContext, useState } from 'react';
import { ThemeContext } from '../../App';

const Frontpage: FC<{}> = () => {
	const [name, setName] = useState<string>();
	const [rerender, setRerender] = useState<boolean>(false);

	const hasName = () => {
		return sessionStorage.getItem('name');
	};

	const storeName: FormEventHandler = (event) => {
		event.preventDefault();
		sessionStorage.setItem('name', name!);
		setRerender(!rerender);
	};
	const theme = useContext(ThemeContext);
	const darkmode = theme.darkmode;
	let color = !darkmode ? 'black' : 'green.500';
	return (
		<Center
			minH='calc(100% - 5em)'
			maxH='calc(100% - 5em)'
			flexDir='column'
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
						<FormLabel color={color}>Enter your name</FormLabel>
						<Input
							color={color}
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
				<Text color={color}>
					Your name will be displayed on the different pages :)
				</Text>
			)}
		</Center>
	);
};

export default Frontpage;
