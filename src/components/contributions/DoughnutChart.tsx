import { Image } from "@chakra-ui/image";
import { FC } from "react";
import sample from "./Sample.png";

const DoughnutChart: FC = () => {
  return <Image src={sample} alt="doughnut chart"></Image>;
};

export default DoughnutChart;
