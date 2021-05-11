import styled from 'styled-components';

export const AlignedItems = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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
`;

export const Title = styled.h1`
	font-size: 25px;
	color: ${(props) => props.color || 'white'};
`;
