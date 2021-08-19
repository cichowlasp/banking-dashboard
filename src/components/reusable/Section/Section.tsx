import React from 'react';
import styled from 'styled-components';

const Section: React.FC<{ color?: string }> = ({ color, children }) => {
	return <StyledSection color={color}>{children}</StyledSection>;
};

const StyledSection = styled.section<{ color?: string }>`
	background-color: ${(props) =>
		props.color ? props.color : props.theme.colors.main};
	padding: 1rem;
	border-radius: 2rem;
`;

export default Section;
