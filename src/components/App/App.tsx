import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import Navbar from '../Navbar/Navbar';
import Label from '../reusable/Label/Label';
import Input from '../reusable/Input/Input';
const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<DefaultDiv className='App'>
				<Label>chuj</Label>
				<Input placeholder='Search' width={'18rem'} image={true} />
				<Navbar></Navbar>
			</DefaultDiv>
		</ThemeProvider>
	);
};

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
