import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import MoreView from '../MoreView/MoreView';
import Card from '../Card/Card';
import SectionWithTitle from '../reusable/SectionWithTitle/SectionWithTitle';
import LastCostsChar from '../LastCostsChar/LastCostsChar';
import ExchangeRatesChar from '../ExchangeRatesChar/ExchangeRatesChar';
import EfficiencyChar from '../EfficiencyChar/EfficiencyChar';
import { ReactComponent as MoreSVG } from './images/more.svg';
const App = () => {
	const [moreView, setMoreView] = useState<boolean>(false);
	const toogleMoreView = () => {
		setMoreView((preValue) => !preValue);
	};
	return (
		<ThemeProvider theme={lightTheme}>
			<Topbar toogleMoreView={toogleMoreView} />
			<Navbar />
			<DefaultDiv>
				{moreView && <MoreView toogleMoreView={toogleMoreView} />}

				<Scroll>
					<Content>
						<Title>Overview</Title>
						<div
							style={{
								gridArea: 'card',
								placeSelf: 'center stretch',
							}}>
							<Card />
						</div>
						<div style={{ gridArea: 'chart2' }}>
							<SectionWithTitle
								title='Last costs'
								leftContent={
									<MoreSVG
										fill={lightTheme.colors.disabled}
									/>
								}
								rotate={true}>
								<LastCostsChar />
							</SectionWithTitle>
						</div>
						<div style={{ gridArea: 'chart' }}>
							<SectionWithTitle
								title='Exchange rates'
								leftContent={
									<ExchangeText>USD = IDR</ExchangeText>
								}
								rotate={true}>
								<ExchangeRatesChar />
							</SectionWithTitle>
						</div>
						<div style={{ gridArea: 'chart3' }}>
							<SectionWithTitle title='Efficiency' rotate={true}>
								<EfficiencyChar />
							</SectionWithTitle>
						</div>
					</Content>
				</Scroll>
			</DefaultDiv>
		</ThemeProvider>
	);
};

export default App;

const Scroll = styled.div`
	background-color: ${lightTheme.colors.background};
	height: 100%;
	width: 100%;
	overflow: auto;
	@media (min-width: 1000px) {
		border-radius: 40px;
		padding-top: 1rem;
		margin-top: 1rem;
		margin-right: 1rem;
	}
`;
const Title = styled.h1`
	display: none;
	@media (min-width: 1000px) {
		display: block;
		color: ${(props) => props.theme.colors.font};
		font-size: 4rem;
		text-align: left;
		margin-top: 0;
	}
`;

const DefaultDiv = styled.div`
	text-align: center;
	max-height: 100%;
	max-width: 100%;
	height: 100%;
	background-color: ${lightTheme.colors.background};
	overflow: hidden;
	html {
		background-color: ${lightTheme.colors.background};
	}
	@media (min-width: 1000px) {
		margin-left: 15rem;
		background-color: ${lightTheme.colors.main};
	}
`;

const ExchangeText = styled.div`
	font-weight: bold;
	text-align: center;
	width: 100px;
`;

const Content = styled.div`
	padding: 6rem 2rem 6rem 2rem;
	@media (min-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			'title . .'
			'card chart chart'
			'chart2 chart2 chart3';
		column-gap: 2rem;
	}
`;
