import React from 'react';
import styled from 'styled-components';

const Label: React.FC<{ size?: string; weight?: string; color?: string }> = ({
	size,
	weight,
	color,
	children,
}) => {
	return (
		<Text size={size} weight={weight} color={color}>
			{children}
		</Text>
	);
};

const Text = styled.div<{ size?: string; weight?: string }>`
	font-size: ${(props) => (props.size ? props.size : '1rem')};
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	color: ${(props) => props.color};
	width: fit-content;
`;

export default Label;
