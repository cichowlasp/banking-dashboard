import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<DefaultDiv className='App'>
				<Topbar />
				<Navbar />
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
