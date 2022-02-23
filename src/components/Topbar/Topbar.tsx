import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Input from '../reusable/Input/Input';
import { ReactComponent as NotificationIcon } from './images/bell.svg';
import { ReactComponent as MoreIcon } from './images/more.svg';

const Topbar: React.FC<{ toogleMoreView: () => void; moreView?: boolean }> = ({
	toogleMoreView,
	moreView,
}) => {
	const { colors } = useContext(ThemeContext);
	return (
		<Container moreView={moreView}>
			<Padding>
				<Input placeholder='Search' image={true} width={'50vw'} />
				<div>
					<Icon>
						<NotificationIcon fill={colors.disabled} />
						<Dot></Dot>
					</Icon>
					<Icon onClick={toogleMoreView}>
						<MoreIcon fill={colors.disabled} />
					</Icon>
				</div>
			</Padding>
		</Container>
	);
};

const Container = styled.div<{ moreView?: boolean }>`
	position: fixed;
	top: 0;
	display: flex;
	width: 100%;
	max-height: 5rem;
	flex-direction: row;
	align-items: center;
	background-color: ${(props) => props.theme.colors.main};
	border-radius: 0 0 2em 2em;
	z-index: 10;
	div {
		display: flex;
		align-items: center;
	}
	@media (min-width: 1000px) {
		flex-direction: column;
		left: 0rem;
		margin-left: 15rem;
		background-color: ${(props) => props.theme.colors.background};
		padding-left: 2rem;
		padding-right: 2rem;
		margin-top: 1rem;
		border-radius: 2rem 2rem;
		width: ${(props) =>
			props.moreView ? 'calc(68% - 19rem)' : 'calc(100% - 19rem)'};
		transition: width 0.35s ease-in-out;
	}
`;

const Padding = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem;
	align-items: center;
	justify-content: space-between;
`;

const Dot = styled.div`
	position: absolute;
	min-height: 10px;
	min-width: 10px;
	background-color: ${(props) => props.theme.colors.accent};
	top: -5px;
	right: 2px;
	border-radius: 50%;
	box-shadow: 0px 0 0 3px ${(props) => props.theme.colors.background};
`;

const Icon = styled.div`
	position: relative;
	margin-left: 1.5rem;
	svg {
		height: 1.5rem;
		width: 1.5rem;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default Topbar;
