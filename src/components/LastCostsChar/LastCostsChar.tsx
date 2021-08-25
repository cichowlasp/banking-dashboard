import React, { useContext } from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory';
import styled, { ThemeContext } from 'styled-components';

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
				<VictoryAxis
					tickFormat={(t) => t}
					style={{
						axis: { opacity: 0 },
						tickLabels: { stroke: colors.disabled, fontSize: 20 },
					}}
				/>
				<VictoryAxis
					dependentAxis
					tickValues={[0, 500, 1000, 1500, 2000]}
					domain={[0, 2000]}
					tickFormat={(t) =>
						`$${t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
					}
					style={{
						axis: { opacity: 0 },
						grid: {
							stroke: colors.disabled,
							opacity: 0.2,
						},
						tickLabels: {
							fontSize: 20,
							stroke: colors.disabled,
							padding: -5,
						},
					}}
				/>
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
			<Legend>
				<div>
					<Dot color={colors.accent} />
					Arrival
				</div>
				<div>
					<Dot color={colors.disabled} />
					Spending
				</div>
			</Legend>
		</div>
	);
};

const Legend = styled.div`
	display: flex;
	justify-content: center;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		&:not(:last-child) {
			margin-right: 4em;
		}
	}
`;

const Dot = styled.div<{ color: string }>`
	background-color: ${(props) => props.color};
	width: 1.5rem;
	height: 0.65rem;
	border-radius: 1em;
	margin-right: 1em;
`;

export default LastCostsChar;
