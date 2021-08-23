import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import MoreView from '../MoreView/MoreView';
import Card from '../Card/Card';
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
				<MoreView moreView={moreView} toogleMoreView={toogleMoreView} />
				<Content>
					<Card />
				</Content>
			</DefaultDiv>
		</ThemeProvider>
	);
};

export default App;

const DefaultDiv = styled.div`
	text-align: center;
	min-height: 100%;
	max-width: 100vw;
	background-color: ${lightTheme.colors.background};
	html {
		background-color: ${lightTheme.colors.background};
	}
`;

const Content = styled.div`
	padding: 5.5rem 3rem;
`;
