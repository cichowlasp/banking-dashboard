import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ReactComponent as Bar } from './icons/bar-chart.svg';
import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Email } from './icons/email.svg';
import { ReactComponent as User } from './icons/user.svg';
import { ReactComponent as List } from './icons/list.svg';

function Navbar() {
	const [navbarStatus, setNavbarStatus] = useState<
		'home' | 'bar' | 'email' | 'user' | 'list'
	>('home');

	const themeColors = useContext(ThemeContext);

	const onClick = (
		name: 'home' | 'bar' | 'email' | 'user' | 'list',
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		setNavbarStatus(name);
	};

	return (
		<Container>
			<Navigation>
				<a href='/' onClick={(event) => onClick('home', event)}>
					<Home
						fill={
							navbarStatus === 'home'
								? themeColors.colors.accent
								: themeColors.colors.disabled
						}
					/>
				</a>
				<a href='/' onClick={(event) => onClick('bar', event)}>
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
				<a href='/' onClick={(event) => onClick('email', event)}>
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
				<a href='/' onClick={(event) => onClick('user', event)}>
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
				<a href='/' onClick={(event) => onClick('list', event)}>
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
			</Navigation>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.main};
	border-radius: 3.2em 3.2em 0 0rem;
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
`;

export default Navbar;
