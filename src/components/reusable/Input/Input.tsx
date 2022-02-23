import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from './images/search.svg';

const Input: React.FC<{
	placeholder?: string;
	width?: string;
	image?: boolean;
}> = ({ placeholder = '', width = '99%', image = false }) => {
	return (
		<ImageWrapper width={width}>
			<StyledInput
				placeholder={placeholder}
				width={width}
				type='text'
				image={image}
			/>
			{image ? (
				<svg>
					<Search fill='#C1C1EB' />
				</svg>
			) : null}
		</ImageWrapper>
	);
};

const StyledInput = styled.input<{ width: string; image: boolean }>`
	height: 2rem;
	width: ${(props) => props.width};
	border: 2px solid ${(props) => props.theme.colors.main};
	border-radius: 1.5rem;
	text-indent: ${(props) => (props.image ? '3rem' : '1rem')};
	font-size: 1rem;
	font-weight: 500;
	appearance: none;
	&::placeholder {
		font-size: 1rem;
		font-weight: 500;
		color: ${(props) => props.theme.colors.disabled};
	}
	&:focus {
		outline: none;
		border: 2px solid ${(props) => props.theme.colors.accent};
	}
	@media (min-width: 1000px) {
		background-color: ${(props) => props.theme.colors.background};
		border: 2px solid ${(props) => props.theme.colors.background};
	}
`;
const ImageWrapper = styled.div<{ width: string }>`
	position: relative;
	height: fit-content;
	svg {
		position: absolute;
		max-height: 1.5rem;
		width: 1.5rem;
		top: 50%;
		left: 1em;
		transform: translate(0, -50%);
	}
`;

export default Input;
