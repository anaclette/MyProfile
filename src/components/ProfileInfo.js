import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import profile from './profile.png';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: black;
	color: white;
	opacity: 0.8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

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
	justify-content: ${(props) => props.justifyContent || 'space-evenly'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
`;
const NameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 220px;
`;
const UserName = styled.h2`
font-weight: bold
font-size: 13px;
`;
const StyledButton = styled.button`
	width: 90px;
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 13px;
	background-color: white;
	font-family: 'Itim', cursive;
	border: 1px solid transparent;
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
	const [ openOverlay, setOpenOverlay ] = useState(false);
	const { loggedIn } = useContext(UserContext);
	const handleClick = () => {
		setOpenOverlay(true);
	};
	return (
		<PersonalDetailsContainer>
			<ImgContainer>
				<img alt="user name" src={profile} />
			</ImgContainer>
			<TextInfoContainer>
				<NameContainer>
					<UserName>username</UserName>
					<StyledButton loggedIn={loggedIn} onClick={handleClick}>
						Edit Profile
					</StyledButton>
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
			{openOverlay && (
				<Overlay>
					{/* <TextInfoContainer alignItems="center" justifyContent="center"> */}
					<TextLine>You are not logged in!</TextLine>
					<StyledButton onClick={() => setOpenOverlay(false)}>Sign in</StyledButton>
					{/* </TextInfoContainer> */}
				</Overlay>
			)}
		</PersonalDetailsContainer>
	);
};

export default ProfileInfo;
