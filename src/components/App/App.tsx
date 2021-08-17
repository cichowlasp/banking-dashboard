import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';

import Navbar from '../Navbar/Navbar';

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<DefaultDiv className='App'>
				<Navbar></Navbar>
			</DefaultDiv>
		</ThemeProvider>
	);
}

export default App;

const DefaultDiv = styled.div`
	text-align: center;
	min-height: 100%;
	width: 100%;
	background-color: ${lightTheme.colors.background};
	html {
		background-color: ${lightTheme.colors.background};
	}
`;
