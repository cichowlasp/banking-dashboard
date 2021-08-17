import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from './images/search.svg';

const Input: React.FC<{
	placeholder?: string;
	width?: string;
	image?: boolean;
}> = ({ placeholder = '', width = '99%', image = false }) => {
	return (
		<ImageWrapper>
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
	&::placeholder {
		font-size: 1rem;
		font-weight: 500;
		color: ${(props) => props.theme.colors.disabled};
	}
	&:focus {
		outline: none;
		border: 2px solid ${(props) => props.theme.colors.accent};
	}
`;
const ImageWrapper = styled.div`
	position: relative;
	height: fit-content;
	width: fit-content;
	svg {
		position: absolute;
		max-height: 1.5rem;
		width: 1.5rem;
		top: 0.45em;
		left: 0.8em;
	}
`;

export default Input;
