import React, { useContext } from 'react';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryGroup } from 'victory';
import styled, { ThemeContext } from 'styled-components';

const ExchangeRatesChar = () => {
	const { colors } = useContext(ThemeContext);
	const shortData = {
		arrivals: [
			{ month: 'Mar', arrival: 10.2 },
			{ month: 'Apr', arrival: 10 },
			{ month: 'May', arrival: 14.6 },
			{ month: 'Jun', arrival: 10.3 },
		],
	};
	return (
		<Size>
			<VictoryChart domainPadding={{ x: 50 }}>
				<VictoryAxis
					tickFormat={(t) => t}
					style={{
						axis: { opacity: 0 },
						tickLabels: { fill: colors.disabled, fontSize: 20 },
					}}
				/>
				<VictoryAxis
					dependentAxis
					tickValues={[10.2, 14.5, 15.6]}
					domain={[9, 16]}
					tickFormat={(t) =>
						`${t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
					}
					style={{
						axis: { opacity: 0 },
						grid: {
							stroke: colors.disabled,
							opacity: 0.2,
						},
						tickLabels: {
							fontSize: 20,
							fill: colors.disabled,
							padding: -5,
						},
					}}
				/>
				<VictoryGroup
					offset={12}
					style={{ data: { width: 10 } }}
					colorScale={[colors.accent]}>
					<VictoryLine
						style={{
							data: { strokeWidth: 8, strokeLinecap: 'round' },
						}}
						interpolation='natural'
						data={shortData.arrivals}
						width={1000}
						x='month'
						y='arrival'
					/>
				</VictoryGroup>
			</VictoryChart>
		</Size>
	);
};
const Size = styled.div`
	@media (min-width: 1000px) {
	}
`;
export default ExchangeRatesChar;
