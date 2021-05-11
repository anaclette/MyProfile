import styled from 'styled-components';

export const AlignedItems = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${(props) => props.flexDirection || 'row'};
`;

export const SpacedItems = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 7px;
`;

export const StyledLink = styled.a`
	width: 40px;
	margin: 5px;
	font-size: 25px;
	color: ${(props) => props.color || 'white'};
	cursor: pointer;
	&:hover {
		color: #939b62;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	overflow: hidden;
	min-width: 150px;
	justify-content: center;
`;
export const Title = styled.h1`
	font-size: 25px;
	color: ${(props) => props.color || 'white'};
`;

export const StyledButton = styled.button`
	border: 1px solid transparent;
	outline: 0;
	margin: 3px;
	background-color: transparent;
`;
