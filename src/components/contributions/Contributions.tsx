import { Container, Heading, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import DoughnutChart from "./DoughnutChart";

const Contributions: FC = () => {
  return (
    <Container maxW="container.sm" border="2px" borderRadius="md" bg="red.100">
      <VStack spacing={2} paddingY={5}>
        <Heading>Contributions</Heading>
        <Text>In terms of commits</Text>
        <DoughnutChart />
      </VStack>
    </Container>
  );
};

export default Contributions;
