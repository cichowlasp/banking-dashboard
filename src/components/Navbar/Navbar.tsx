import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ReactComponent as Bar } from './icons/bar-chart.svg';
import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Email } from './icons/email.svg';
import { ReactComponent as User } from './icons/user.svg';
import { ReactComponent as List } from './icons/list.svg';

const Navbar = () => {
	const [navbarStatus, setNavbarStatus] = useState<
		'home' | 'bar' | 'email' | 'user' | 'list'
	>('home');

	const themeColors = useContext(ThemeContext);

	const onClick = (
		name: 'home' | 'bar' | 'email' | 'user' | 'list',
		event: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		event.preventDefault();
		setNavbarStatus(name);
	};

	return (
		<Container>
			<Navigation>
				<IconWrapper onClick={(event) => onClick('home', event)}>
					<a href='/'>
						<Home
							fill={
								navbarStatus === 'home'
									? themeColors.colors.accent
									: themeColors.colors.disabled
							}
						/>
					</a>
					<Label
						style={{
							color:
								navbarStatus === 'home'
									? themeColors.colors.accent
									: themeColors.colors.disabled,
						}}>
						Overview
					</Label>
				</IconWrapper>
				<IconWrapper onClick={(event) => onClick('bar', event)}>
					<a href='/'>
						<svg>
							<Bar
								fill={
									navbarStatus === 'bar'
										? themeColors.colors.accent
										: themeColors.colors.disabled
								}
							/>
						</svg>
					</a>
					<Label
						style={{
							color:
								navbarStatus === 'bar'
									? themeColors.colors.accent
									: themeColors.colors.disabled,
						}}>
						Statistics
					</Label>
				</IconWrapper>
				<IconWrapper onClick={(event) => onClick('email', event)}>
					<a href='/'>
						<svg>
							<Email
								fill={
									navbarStatus === 'email'
										? themeColors.colors.accent
										: themeColors.colors.disabled
								}
							/>
						</svg>
					</a>
					<Label
						style={{
							color:
								navbarStatus === 'email'
									? themeColors.colors.accent
									: themeColors.colors.disabled,
						}}>
						Messages
					</Label>
				</IconWrapper>
				<IconWrapper onClick={(event) => onClick('user', event)}>
					<a href='/'>
						<svg>
							<User
								fill={
									navbarStatus === 'user'
										? themeColors.colors.accent
										: themeColors.colors.disabled
								}
							/>
						</svg>
					</a>
					<Label
						style={{
							color:
								navbarStatus === 'user'
									? themeColors.colors.accent
									: themeColors.colors.disabled,
						}}>
						Profile
					</Label>
				</IconWrapper>
				<IconWrapper onClick={(event) => onClick('list', event)}>
					<a href='/'>
						<svg>
							<List
								fill={
									navbarStatus === 'list'
										? themeColors.colors.accent
										: themeColors.colors.disabled
								}
							/>
						</svg>
					</a>
					<Label
						style={{
							color:
								navbarStatus === 'list'
									? themeColors.colors.accent
									: themeColors.colors.disabled,
						}}>
						Documents
					</Label>
				</IconWrapper>
			</Navigation>
		</Container>
	);
};

const Label = styled.div`
	display: none;
	@media (min-width: 1000px) {
		display: block;
		font-weight: 800;
	}
`;

const IconWrapper = styled.span`
	@media (min-width: 1000px) {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		margin-left: 2rem;
	}
`;

const Container = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.main};
	border-radius: 3em 3em 0 0rem;
	z-index: 2;
	@media (min-width: 1000px) {
		height: 100%;
		width: 15rem;
		flex-direction: column;
		border-radius: 0;
	}
`;

const Navigation = styled.nav`
	width: 80%;
	max-height: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		max-height: 1.5rem;
		max-width: 1.5rem;
	}
	img {
		height: 1.5rem;

		path {
			fill: ${(props) => props.theme.colors.accent};
		}
	}
	@media (min-width: 1000px) {
		flex-direction: column;
	}
`;

export default Navbar;
