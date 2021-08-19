import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ReactComponent as SettingsIcon } from './images/settings.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';

const MoreView: React.FC<{ moreView: boolean; toogleMoreView: () => void }> = ({
	moreView,
	toogleMoreView,
}) => {
	const themeColors = useContext(ThemeContext);
	return (
		<Background moreView={moreView}>
			<Wrapper>
				<ButtonsContainer>
					<SettingsIcon fill={themeColors.colors.disabled} />
					<CloseIcon
						fill={themeColors.colors.disabled}
						onClick={toogleMoreView}
					/>
				</ButtonsContainer>
			</Wrapper>
		</Background>
	);
};

const Background = styled.div<{ moreView: boolean }>`
	visibility: ${({ moreView }) => (moreView ? 'visible' : 'hidden')};
	position: absolute;
	background-color: ${(props) => props.theme.colors.main};
	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
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
		}
		&:hover {
			cursor: pointer;
		}
	}
`;

export default MoreView;
