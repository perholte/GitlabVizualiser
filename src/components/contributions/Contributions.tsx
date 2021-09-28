import { Center, Container, Heading, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { containerStyles } from '../style/styles';
import Chart from './Chart';

const Contributions: FC = () => {
	console.log({ containerStyles });

	return (
		<Center>
			<Container maxW='container.sm' sx={containerStyles}>
				<Flex marginY={5} flexDir='column' alignItems='center'>
					<Heading>Contributions</Heading>
					<Text>In terms of commits</Text>
					<Chart />
				</Flex>
			</Container>
		</Center>
	);
};

export default Contributions;
