import NavBar from './components/NavBar';
import ProfileInfo from './components/ProfileInfo';
import GalerySection from './components/GalerySection';
import { createGlobalStyle } from 'styled-components';
import { theme } from './styles/Themes';
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
font-family: 'Itim', cursive;
background-color: ${({ theme }) => theme.colors.background};
}
* {
  margin: 0
}
`;

const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<NavBar />
				<ProfileInfo />
				<GalerySection />
			</ThemeProvider>
		</div>
	);
};

export default App;
