import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchInput from './SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { SpacedItems, AlignedItems, StyledLink, Title } from './Commons';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Themes';

const StyledNavBar = styled.div`
	width: 100%;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.primary};
`;

const NavBar = () => {
	return (
		<div>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<StyledNavBar>
						<SpacedItems>
							<Title color={theme.colors.text}>My Profile</Title>
							<SearchInput />
							<AlignedItems>
								<StyledLink>
									<FontAwesomeIcon icon={faClock} />
								</StyledLink>
								<StyledLink>
									<FontAwesomeIcon icon={faHeart} />
								</StyledLink>
								<StyledLink>
									<FontAwesomeIcon icon={faUser} />
								</StyledLink>
							</AlignedItems>
						</SpacedItems>
					</StyledNavBar>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
};

export default NavBar;
