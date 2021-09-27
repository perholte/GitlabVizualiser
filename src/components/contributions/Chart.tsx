import { FC } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { getContributionsData } from "../../api/utils";

const COLORS: string[] = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#B84E66",
];

const Chart: FC = () => {
  const data = getContributionsData();
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
