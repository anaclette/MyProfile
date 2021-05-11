import styled from 'styled-components';

export const StyledInput = styled.input`
	width: 200px;
	padding: 10px;
	text-align: center;
	outline: 0;
	border-radius: 5px;
	border: 1px solid #ffd56b;
	font-size: 17px;
	@media (max-width: 600px) {
		width: 100px;
	}
`;

const SearchInput = () => {
	return <StyledInput placeholder="Search" />;
};

export default SearchInput;
