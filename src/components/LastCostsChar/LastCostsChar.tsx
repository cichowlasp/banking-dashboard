import React, { useContext } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory';
import { ThemeContext } from 'styled-components';

const LastCostsChar = () => {
	const { colors } = useContext(ThemeContext);
	const shortData = {
		arrivals: [
			{ month: 'Mar', arrival: 1100 },
			{ month: 'Apr', arrival: 800 },
			{ month: 'May', arrival: 1700 },
			{ month: 'Jun', arrival: 1200 },
		],
		spendings: [
			{ month: 'Mar', arrival: 600 },
			{ month: 'Apr', arrival: 200 },
			{ month: 'May', arrival: 800 },
			{ month: 'Jun', arrival: 400 },
		],
	};
	return (
		<div>
			<VictoryChart>
				<VictoryGroup
					offset={10}
					style={{ data: { width: 8 } }}
					colorScale={[colors.disabled, colors.accent]}>
					<VictoryBar
						data={shortData.spendings}
						x='month'
						y='arrival'
						cornerRadius={5}
					/>
					<VictoryBar
						cornerRadius={5}
						data={shortData.arrivals}
						x='month'
						y='arrival'
					/>
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default LastCostsChar;
