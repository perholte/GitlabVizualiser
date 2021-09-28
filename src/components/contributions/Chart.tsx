import { useInterval } from '@chakra-ui/hooks';
import { FC, useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { ContributionsData, getContributionsData } from '../../api/utils';

const COLORS: string[] = [
	'#0088FE',
	'#00C49F',
	'#FFBB28',
	'#FF8042',
	'#B84E66',
];

const Chart: FC = () => {
	const [data, setData] = useState<ContributionsData>();
	const [refresh, setRefresh] = useState<Boolean>(false);

	useInterval(() => setRefresh(!refresh), 1000 * 60);

	useEffect(() => {
		async function fetchData() {
			const d = await getContributionsData();
			setData(d);
		}
		fetchData();
	}, [refresh]);
	// https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
	return (
		<PieChart width={300} height={300}>
			<Pie
				data={data}
				cx={150}
				cy={150}
				innerRadius={100}
				outerRadius={130}
				paddingAngle={5}
				dataKey='commits'
			>
				{data?.map((_entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={COLORS[index % COLORS.length]}
					/>
				))}
			</Pie>
			<Legend />
		</PieChart>
	);
};

export default Chart;
