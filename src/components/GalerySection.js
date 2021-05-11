import styled from 'styled-components';
import { feedsource } from '../contexts/UserContext';

const GaleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 70%;
`;

const ImageContainer = styled.div`
	margin: 5px;
	max-width: 300px;
	img {
		width: 300px;
		height: 220px;
	}
`;

const GalerySection = () => {
	return (
		<GaleryContainer>
			{feedsource.map((post) => {
				return (
					<ImageContainer key={post.id}>
						<img alt="paisaje" src={post.source} />
					</ImageContainer>
				);
			})}
		</GaleryContainer>
	);
};

export default GalerySection;
