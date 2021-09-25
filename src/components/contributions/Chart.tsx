import { FC } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

type ChartData = { name: string; commits: number }[];

const testData: ChartData = [
  { name: "Dev1", commits: 45 },
  { name: "Dev2", commits: 30 },
  { name: "Dev3", commits: 15 },
  { name: "Dev4", commits: 10 },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart: FC = () => {
  const data = testData; // should take formatted data from the api
  // https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={400}
        cy={200}
        innerRadius={100}
        outerRadius={130}
        paddingAngle={5}
        dataKey="commits"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default Chart;
