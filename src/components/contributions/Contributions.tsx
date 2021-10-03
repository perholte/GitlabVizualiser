import { Center, Container, Heading, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Chart from './Chart';

const Contributions: FC = () => {
	return (
		<Center flexDir='column' pt='3rem'>
			<Container maxW='container.sm'>
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
