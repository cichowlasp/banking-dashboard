import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ReactComponent as UserSVG } from './images/user.svg';

const Logo: React.FC<{ size?: number }> = ({ size = 2 }) => {
	const { colors } = useContext(ThemeContext);
	return (
		<LogoCircle size={size}>
			<UserSVG fill={colors.disabled} />
		</LogoCircle>
	);
};

const LogoCircle = styled.div<{ size: number }>`
	display: flex;
	height: ${(props) => props.size}rem;
	width: ${(props) => props.size}rem;
	background-color: ${(props) => props.theme.colors.accent};
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	svg {
		height: ${(props) => props.size - 1.5}rem;
		width: ${(props) => props.size - 1.5}rem;
	}
`;

export default Logo;
