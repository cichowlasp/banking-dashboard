import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Input from '../reusable/Input/Input';
import { ReactComponent as NotificationIcon } from './images/bell.svg';
import { ReactComponent as MoreIcon } from './images/more.svg';

const Topbar = () => {
	const themeColors = useContext(ThemeContext);
	return (
		<Container>
			<Padding>
				<Input placeholder='Search' image={true} width={'50vw'} />
				<div>
					<Icon>
						<NotificationIcon fill={themeColors.colors.disabled} />
						<Dot></Dot>
					</Icon>
					<Icon>
						<MoreIcon fill={themeColors.colors.disabled} />
					</Icon>
				</div>
			</Padding>
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	width: 100%;
	max-height: 5rem;
	flex-direction: row;
	align-items: center;
	background-color: ${(props) => props.theme.colors.main};
	border-radius: 0 0 2em 2em;
	div {
		display: flex;
		align-items: center;
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
`;

export default Topbar;
