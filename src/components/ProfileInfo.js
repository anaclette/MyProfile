import styled from 'styled-components';
import profile from './profile.png';

const ImgContainer = styled.div`
	padding: 2px;
	border-radius: 300px;
	margin: 25px;
	border: 1px dotted orange;
	img {
		border-radius: 300px;
		width: 150px;
	}
`;
const PersonalDetailsContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const TextInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
const NameContainer = styled.div`display: flex;`;
const UserName = styled.h2`
font-weight: bold
font-size: 13px;
`;
const StyledButton = styled.button`
	width: 90px;
	padding: 7px;
	border-radius: 5px;
	${'' /* outline: none; */} font-size: 13px;
	border: 1px solid transparent;
	margin-left: 15px;
`;
const ContentDetails = styled.div`display: flex;`;

const DetailBox = styled.div`
	display: flex;
	width: 100px;
`;
const Amount = styled.p`
	font-size: 14px;
	font-weight: bolder;
`;
const TextLine = styled.span`font-size: 13px;`;
const Name = styled.h3`font-weight: bold;`;

const ProfileInfo = () => {
	return (
		<PersonalDetailsContainer>
			<ImgContainer>
				<img src={profile} />
			</ImgContainer>
			<TextInfoContainer>
				<NameContainer>
					<UserName>username</UserName>
					<StyledButton>Edit Profile</StyledButton>
				</NameContainer>
				<ContentDetails>
					<DetailBox>
						<Amount>25</Amount>
						<TextLine>posts</TextLine>
					</DetailBox>
					<DetailBox>
						<Amount>357</Amount>
						<TextLine>followers</TextLine>
					</DetailBox>
					<DetailBox>
						<Amount>584</Amount>
						<TextLine>following</TextLine>
					</DetailBox>
				</ContentDetails>
				<Name>User</Name>
			</TextInfoContainer>
		</PersonalDetailsContainer>
	);
};

export default ProfileInfo;
