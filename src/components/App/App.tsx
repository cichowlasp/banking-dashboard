import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from '../Navbar/Navbar';

const colors = {
	main: '#FFFFFF',
	background: '#F7F9FE',
	accent: '#693FFF',
	font: '#252A4C',
};

function App() {
	return (
		<ThemeProvider theme={colors}>
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
	background-color: ${colors.background};
`;
