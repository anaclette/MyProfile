import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchInput from './SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { SpacedItems, AlignedItems, StyledLink, TitleContainer, Title, IconButton } from './Commons';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Themes';
import { StyledButton } from './ProfileInfo';
import SignIn from './SignInScreen';

const StyledNavBar = styled.div`
	padding: 10px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
`;

const NavBar = () => {
	const [ isloggedIn, setLoggedIn ] = useState(false);
	const [ view, setCurrentView ] = useState(false);

	const handleClick = () => {
		setLoggedIn(!isloggedIn);
	};
	const handleClickSignIn = () => {
		setCurrentView(!view);
		setLoggedIn(!isloggedIn);
	};

	return (
		<div>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<StyledNavBar>
						<SpacedItems>
							<TitleContainer>
								{!isloggedIn ? (
									<Title color={theme.colors.text}>My Profile</Title>
								) : (
									<StyledButton onClick={handleClickSignIn}>Sign in</StyledButton>
								)}
								{view && <SignIn />}
							</TitleContainer>
							<SearchInput />
							<AlignedItems>
								<IconButton>
									<StyledLink>
										<FontAwesomeIcon icon={faClock} />
									</StyledLink>
								</IconButton>
								<IconButton>
									<StyledLink>
										<FontAwesomeIcon icon={faHeart} />
									</StyledLink>
								</IconButton>
								<UserContext.Provider value={{ loggedIn: isloggedIn }}>
									<IconButton onClick={handleClick}>
										<StyledLink>
											<FontAwesomeIcon icon={faUser} />
										</StyledLink>
									</IconButton>
								</UserContext.Provider>
							</AlignedItems>
						</SpacedItems>
					</StyledNavBar>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
};

export default NavBar;
