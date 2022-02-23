import React, { useContext } from 'react';
import { VictoryPie } from 'victory';
import styled, { ThemeContext } from 'styled-components';

const EfficiencyChar = () => {
	const { colors } = useContext(ThemeContext);
	const sampleData = [{ y: 70 }, { y: 30 }];
	return (
		<Size>
			<ChartWrapper>
				<TextInsideChar>
					<Money>$5,200</Money>
					<Percents>+10%</Percents>
				</TextInsideChar>
				<VictoryPie
					padAngle={5}
					innerRadius={135}
					data={sampleData}
					cornerRadius={10}
					colorScale={[colors.accent, colors.disabled]}
					style={{
						labels: {
							fontSize: 0,
						},
					}}
				/>
			</ChartWrapper>
			<Legend>
				<div>
					<Dot color={colors.accent} />
					Earned
				</div>
				<div>
					<Dot color={colors.disabled} />
					Spend
				</div>
			</Legend>
		</Size>
	);
};

const Size = styled.div`
	@media (min-width: 1000px) {
		width: 17rem;
	}
`;

const ChartWrapper = styled.div`
	position: relative;
`;

const TextInsideChar = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Money = styled.div`
	font-weight: 800;
	font-size: 1.5rem;
`;

const Percents = styled.div`
	color: ${(props) => props.theme.colors.background};
	background-color: ${(props) => props.theme.colors.accent};
	width: fit-content;
	padding: 6px;
	border-radius: 13px;
	font-size: 0.8rem;
	font-weight: bold;
`;

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

export default EfficiencyChar;
