import React from 'react';
import styled from 'styled-components';

const Section: React.FC<{ color?: string }> = ({ color, children }) => {
	return <StyledSection color={color}>{children}</StyledSection>;
};

const StyledSection = styled.section<{ color?: string }>`
	background-color: ${(props) =>
		props.color ? props.color : props.theme.colors.main};
	padding: 2rem;
	border-radius: 2rem;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1000px) {
		height: 20rem;
		max-height: 20rem;
	}
`;

export default Section;
