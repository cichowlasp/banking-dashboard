import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import MoreView from '../MoreView/MoreView';
import Card from '../Card/Card';
import SectionWithTitle from '../reusable/SectionWithTitle/SectionWithTitle';
import LastCostsChar from '../LastCostsChar/LastCostsChar';
import { ReactComponent as MoreSVG } from './images/more.svg';
const App = () => {
	const [moreView, setMoreView] = useState<boolean>(false);
	const toogleMoreView = () => {
		setMoreView((preValue) => !preValue);
	};
	return (
		<ThemeProvider theme={lightTheme}>
			<DefaultDiv className='App'>
				<Topbar toogleMoreView={toogleMoreView} />
				<Navbar />
				{moreView && <MoreView toogleMoreView={toogleMoreView} />}
				<Content>
					<Card />
					<SectionWithTitle
						title='Last costs'
						leftContent={
							<MoreSVG fill={lightTheme.colors.disabled} />
						}
						rotate={true}>
						<LastCostsChar />
					</SectionWithTitle>
				</Content>
			</DefaultDiv>
		</ThemeProvider>
	);
};

export default App;

const DefaultDiv = styled.div`
	text-align: center;
	max-height: 100%;
	max-width: 100%;
	background-color: ${lightTheme.colors.background};
	overflow: auto;
	html {
		background-color: ${lightTheme.colors.background};
	}
`;

const Content = styled.div`
	padding: 6rem 2rem 6rem 2rem;
	overflow-y: auto;
`;
