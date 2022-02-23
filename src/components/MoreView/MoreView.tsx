import React, { useContext } from 'react';
import styled, { ThemeContext, keyframes } from 'styled-components';
import Logo from './components/Logo/Logo';
import Label from '../reusable/Label/Label';
import Section from '../reusable/Section/Section';
import Transfer from './components/Transfer/Transfer';
import { ReactComponent as SettingsIcon } from './images/settings.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';
import { VictoryLine } from 'victory';

const MoreView: React.FC<{ toogleMoreView: () => void }> = ({
	toogleMoreView,
}) => {
	const { colors } = useContext(ThemeContext);
	return (
		<Background>
			<ButtonsContainer>
				<SettingsIcon fill={colors.disabled} />
				<CloseIcon fill={colors.disabled} onClick={toogleMoreView} />
			</ButtonsContainer>
			<Wrapper>
				<Logo size={6} />
				<Name>
					<Label size={'2rem'} weight={'bold'}>
						Piotr
					</Label>
					<Label size={'2rem'} weight={'bold'}>
						Cichowlas
					</Label>
					<Label weight={'500'} color={colors.disabled}>
						Financial analystics
					</Label>
				</Name>
				<Section color={colors.background}>
					<VictoryLine
						height={300}
						width={500}
						interpolation='natural'
						style={{
							data: {
								stroke: colors.moreChart,
								strokeWidth: '0.5rem',
								strokeLinejoin: 'round',
								width: '2rem',
							},
						}}
						data={[
							{ x: 1, y: 2 },
							{ x: 2, y: 3 },
							{ x: 3, y: 5 },
							{ x: 4, y: 4 },
							{ x: 5, y: 7 },
						]}
					/>
					<Label weight={'500'} color={colors.disabled}>
						Total Profit
					</Label>
					<Label
						paddingTop={'1.5rem'}
						weight={'bold'}
						color={colors.font}
						size={'9vw'}>
						$24,500
					</Label>
				</Section>
				<Label
					paddingTop={'1.5rem'}
					weight={'600'}
					color={colors.font}
					size={'1.5rem'}>
					Recent Activities
				</Label>
				<Label
					weight={'500'}
					color={colors.disabled}
					size={'0.9rem'}
					paddingTop={'2rem'}>
					TODAY
				</Label>
				<Transfer
					name={'Dorota Cichowlas'}
					person={true}
					money={'53,85'}
					title={'sent'}
					recived={false}
				/>
				<Transfer
					name={'Jakub Cichowlas'}
					person={true}
					money={'50,21'}
					title={'sent'}
					recived={true}
				/>
				<BreakLine />
				<Label weight={'500'} color={colors.disabled} size={'0.9rem'}>
					YESTERDAY
				</Label>
				<Transfer
					name={'Nero'}
					money={'5,00'}
					title={'Cafe and restaurants'}
					recived={false}
				/>
			</Wrapper>
		</Background>
	);
};

const SlideIn = keyframes`
	from {
		right:-100%;
	}
	to{
		right:0;
	}
`;

const Background = styled.div`
	position: absolute;
	background-color: ${(props) => props.theme.colors.main};
	transition: right 0.35s ease-in-out;
	animation: ${SlideIn} 0.5s;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 15;
`;

const Wrapper = styled.div`
	transition: opacity 0.5s ease-in;
	opacity: 100%;

	max-width: 100%;
	padding: 4rem;
`;

const ButtonsContainer = styled.div`
	position: absolute;
	right: 0;
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		margin: 1.5rem 1rem;
		height: 1.4rem;
		width: 1.4rem;
		&:nth-child(2) {
			height: 1rem;
			width: 1rem;
			border: 1px solid ${(props) => props.theme.colors.disabled};
			padding: 0.5rem;
			border-radius: 50%;
			margin: 0rem 2rem;
			margin-left: 1rem;
			margin-right: 1rem;
			transition: transform 0.2s ease-in-out;
			&:hover {
				background-color: ${(props) => props.theme.colors.accent};
				transform: scale(1.2);
			}
		}
		&:hover {
			cursor: pointer;
		}
	}
`;

const Name = styled.div`
	margin-top: 2rem;
	div {
		&:last-child {
			margin-top: 1rem;
		}
	}
`;

const BreakLine = styled.div`
	height: 1px;
	width: 100%;
	margin: 2rem 0;
	border-top: 2px solid ${(props) => props.theme.colors.disabled};
	opacity: 0.3;
`;

export default MoreView;
