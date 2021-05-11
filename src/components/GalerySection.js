import styled from 'styled-components';
import { feedsource } from '../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StyledLink } from './Commons';

const LikeButton = styled.button`
	position: absolute;
	top: 110px;
	left: 140px;
	background-color: transparent;
	border: 1px solid transparent;
	cursor: pointer;
	z-index: 3;
	border-radius: 100px;
	padding: 10px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
font-size: 30px;
color: white;

`;

const GaleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 80%;
`;

const ImageContainer = styled.div`
	margin: 5px;
	width: 300px;
	display: flex;
	align-items: center;
	position: relative;
	height: 250px;
	img {
		width: 300px;
		height: 250px;
	}
	&:hover {
		img {
			opacity: 0.4;
		}
	}
`;

const GalerySection = () => {
	return (
		<GaleryContainer>
			{feedsource.map((post) => {
				return (
					<ImageContainer key={post.id}>
						<StyledLink>
							<LikeButton>
								<StyledIcon icon={faHeart} />
							</LikeButton>
						</StyledLink>
						<img alt="paisaje" src={post.source} />
					</ImageContainer>
				);
			})}
		</GaleryContainer>
	);
};

export default GalerySection;
