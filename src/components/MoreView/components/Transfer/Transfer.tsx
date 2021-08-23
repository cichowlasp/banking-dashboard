import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ReactComponent as Arrow } from './images/right-arrow.svg';

const Transfer: React.FC<{
	name: string;
	recived: boolean;
	money: string;
	title: string;
	person?: boolean;
}> = ({ name, recived, money, title, person = false }) => {
	const { colors } = useContext(ThemeContext);
	return (
		<TransferWrapper recived={recived}>
			<ImageWrapper recived={recived}>
				<svg>
					<Arrow fill={recived ? colors.green : colors.red} />
				</svg>
			</ImageWrapper>
			<TextWrapper>
				<div>
					{person ? 'To' : ''} {name}
					<div id='money'>
						{recived ? '+' : '-'}${money}
					</div>
				</div>
				<div>{title}</div>
			</TextWrapper>
		</TransferWrapper>
	);
};

const TransferWrapper = styled.div<{ recived: boolean }>`
	display: flex;
	justify-content: left;
	align-items: center;
	height: 4rem;
	min-width: 100%;
	svg {
		height: 1.5rem;
		width: 1.5rem;
		transform: rotate(${(props) => (props.recived ? '45deg' : '-45deg')});
	}
	margin-top: 1rem;
	#money {
		display: flex;
		min-width: max-content;
		font-size: 1rem;
		font-weight: 600;
		color: ${(props) => props.theme.colors.font};
		word-wrap: break-word;
		align-self: flex-start;
		margin-left: auto;
		margin-top: 0;
		padding-top: 0;
	}
`;

const ImageWrapper = styled.div<{ recived: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3.5rem;
	min-width: 3.5rem;
	background-color: ${(props) =>
		props.recived
			? props.theme.colors.lightGreen
			: props.theme.colors.lightRed};
	border-radius: 1em;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	height: 100%;
	width: 100%;
	margin-left: 1.5rem;
	justify-content: center;
	div {
		&:first-child {
			display: flex;
			font-weight: 600;
			color: ${(props) => props.theme.colors.font};
			word-wrap: break-word;
		}
		&:last-child {
			padding-top: 0.5rem;
			color: ${(props) => props.theme.colors.disabled};
			font-size: 0.9rem;
			font-weight: 500;
		}
	}
`;

export default Transfer;
