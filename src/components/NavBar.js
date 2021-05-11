import { useState } from 'react';
import UserContext from '../contexts/UserContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchInput from './SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { SpacedItems, AlignedItems, StyledLink, TitleContainer, Title, StyledButton } from './Commons';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Themes';

const StyledNavBar = styled.div`
	padding: 10px;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.colors.primary};
`;

const NavBar = () => {
	const [ isloggedIn, setLoggedIn ] = useState(false);
	// const { loggedIn } = useContext(UserContext);
	// console.log('Im in NavBar', loggedIn);
	const handleClick = () => {
		setLoggedIn(!isloggedIn);
	};
	return (
		<div>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<StyledNavBar>
						<SpacedItems>
							<TitleContainer>
								<Title color={theme.colors.text}>{isloggedIn ? 'Hi User!' : 'My Profile'}</Title>
							</TitleContainer>
							<SearchInput />
							<AlignedItems>
								<StyledButton>
									<StyledLink>
										<FontAwesomeIcon icon={faClock} />
									</StyledLink>
								</StyledButton>
								<StyledButton>
									<StyledLink>
										<FontAwesomeIcon icon={faHeart} />
									</StyledLink>
								</StyledButton>
								<UserContext.Provider value={{ loggedIn: isloggedIn }}>
									<StyledButton onClick={handleClick}>
										<StyledLink>
											<FontAwesomeIcon icon={faUser} />
										</StyledLink>
									</StyledButton>
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
