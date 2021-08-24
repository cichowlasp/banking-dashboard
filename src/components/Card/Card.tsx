import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Label from '../reusable/Label/Label';
import { ReactComponent as MasterCard } from './images/mc_symbol.svg';
import { ReactComponent as ApplePay } from './images/apple.svg';

const Card = () => {
	const { colors } = useContext(ThemeContext);
	return (
		<CardContainer>
			<LogoWrapper>
				<MasterCard />
				<ApplePay />
			</LogoWrapper>
			<CardNumber>
				<span>****</span>
				<span>****</span>
				<span>****</span>
				<span>5610</span>
			</CardNumber>
			<InfoContainer>
				<Data>
					<Label
						weight={'500'}
						color={colors.disabled}
						size={'0.9rem'}
						paddingTop={'2rem'}>
						VALID THRU
					</Label>
					<Label
						weight={'500'}
						color={colors.main}
						paddingTop={'1rem'}>
						08/22
					</Label>
				</Data>
				<Data>
					<Label
						weight={'500'}
						color={colors.disabled}
						size={'0.9rem'}
						paddingTop={'2rem'}>
						CARD HOLDER
					</Label>
					<Label
						weight={'500'}
						color={colors.main}
						paddingTop={'1rem'}>
						Piotr Cicho
					</Label>
				</Data>
			</InfoContainer>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	margin: 0 auto;
	height: fit-content;
	width: 100%;
	background-color: ${(props) => props.theme.colors.accent};
	border-radius: 1.5em;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const LogoWrapper = styled.div`
	display: flex;
	min-height: 25vw;
	height: fit-content;
	justify-content: space-between;
	width: 100%;
	svg {
		padding: 0 1rem;
		width: 6rem;
		height: 6rem;
	}
`;

const CardNumber = styled.div`
	text-align: left;
	margin: 0 2rem;
	color: ${(props) => props.theme.colors.main};
	font-weight: 600;
	font-size: 1.1rem;

	span:not(:last-child) {
		margin-right: 1rem;
		letter-spacing: 0.1rem;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Data = styled.div`
	padding: 0 2rem;
	&div:last-child {
		padding-top: 0;
	}
	padding-bottom: 2rem;
`;

export default Card;
