import { FC } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

type ChartData = { name: string; commits: number }[];

const testData: ChartData = [
  { name: "Dev1", commits: 400 },
  { name: "Dev2", commits: 300 },
  { name: "Dev3", commits: 300 },
  { name: "Dev4", commits: 200 },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart: FC = () => {
  const data = testData;
  // https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
  return (
    <PieChart width={800} height={400}>
      <Legend />
      <Pie
        data={data}
        cx={400}
        cy={200}
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="commits"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
