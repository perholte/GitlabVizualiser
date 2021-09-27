import { Container, Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Chart from "./Chart";

const Contributions: FC = () => {
  return (
    <Container maxW="container.sm" border="2px" borderRadius="md" bg="blue.400">
      <Flex marginY={5} flexDir="column" alignItems="center">
        <Heading>Contributions</Heading>
        <Text>In terms of commits</Text>
        <Chart />
      </Flex>
    </Container>
  );
};

export default Contributions;
