import React from 'react';
import styled from 'styled-components';

const Label: React.FC<{
	size?: string;
	weight?: string;
	color?: string;
	paddingTop?: string;
}> = ({ size, weight, color, paddingTop = '0rem', children }) => {
	return (
		<Text size={size} weight={weight} color={color} paddingTop={paddingTop}>
			{children}
		</Text>
	);
};

const Text = styled.div<{ size?: string; weight?: string; paddingTop: string }>`
	font-size: ${(props) => (props.size ? props.size : '1rem')};
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	color: ${(props) => props.color};
	width: fit-content;
	padding-top: ${(props) => props.paddingTop};
`;

export default Label;
