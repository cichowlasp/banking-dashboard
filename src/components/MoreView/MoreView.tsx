import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Logo from './components/Logo/Logo';
import Label from '../reusable/Label/Label';
import { ReactComponent as SettingsIcon } from './images/settings.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';

const MoreView: React.FC<{ moreView: boolean; toogleMoreView: () => void }> = ({
	moreView,
	toogleMoreView,
}) => {
	const { colors } = useContext(ThemeContext);
	return (
		<Background moreView={moreView}>
			<ButtonsContainer>
				<SettingsIcon fill={colors.disabled} />
				<CloseIcon fill={colors.disabled} onClick={toogleMoreView} />
			</ButtonsContainer>
			<Wrapper moreView={moreView}>
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
			</Wrapper>
		</Background>
	);
};

const Background = styled.div<{ moreView: boolean }>`
	visibility: ${({ moreView }) => (moreView ? 'visible' : 'hidden')};
	position: absolute;
	background-color: ${(props) => props.theme.colors.main};
	transition: right 0.35s ease-in-out;
	right: ${({ moreView }) => (moreView ? '0' : '-100%')};
	width: ${({ moreView }) => (moreView ? '100%' : '0')};
	height: 100%;
	overflow: hidden;
`;

const Wrapper = styled.div<{ moreView: boolean }>`
	transition: opacity 0.5s ease-in;
	opacity: ${({ moreView }) => (moreView ? '100%' : '0%')};
	max-height: 100%;
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
			&:hover {
				background-color: ${(props) => props.theme.colors.accent};
				transition: transform 0.2s ease-in-out;
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

export default MoreView;
