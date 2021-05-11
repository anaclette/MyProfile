import styled from 'styled-components';

const GaleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ImageContainer = styled.div`
	margin: 5px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 300px;
	img {
		width: 300px;
		height: 220px;
	}
`;

const feedsource = [
	{
		source: 'https://www.viajejet.com/wp-content/viajes/una-laguna-unica-en-jamaica-650x366.jpg',
		likes: '43',
		comments: '3',
		id: 0
	},
	{
		source: 'https://www.viajejet.com/wp-content/viajes/los-arrecifes-de-coral-de-bunaken-indonesia-650x366.jpg',
		likes: '313',
		comments: '10',
		id: 1
	},
	{
		source:
			'https://www.viajejet.com/wp-content/viajes/paisaje-nevado-en-el-parque-nacional-deogyusan-corea-del-sur-650x366.jpg',
		likes: '29',
		comments: '2',
		id: 2
	},
	{
		source: 'https://www.viajejet.com/wp-content/viajes/un-paisaje-de-vertigo-en-ronda-malaga-espana-650x366.jpg',
		likes: '18',
		comments: '2',
		id: 3
	},
	{
		source:
			'https://www.viajejet.com/wp-content/viajes/El-increible-paisaje-de-Semuc-Champey-Guatemala-650x366.jpg',
		likes: '30',
		comments: '4',
		id: 4
	}
];

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
