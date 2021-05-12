import { useState } from 'react';
import styled from 'styled-components';
import { Overlay, StyledButton } from './ProfileInfo';

const SignInScreen = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 300px;
	background-color: pink;
	position: absolute;
	z-index: 10;
	border-radius: 5px;
	left: 47%;
	right: 50%;
	top: 30%;
	bottom: 50%;
	@media (max-width: 900px) {
		left: 300px;
	}
	@media (max-width: 700px) {
		left: 200px;
	}
	@media (max-width: 600px) {
		left: 90px;
	}
`;

const UserInput = styled.input`
	width: 250px;
	padding: 8px;
	margin: 10px;
	outline: 0;
	border: 1px solid deeppink;
	font-family: 'Itim', cursive;
	color: darkblue;
	font-size: 20px;
`;

const SignIn = () => {
	const [ view, setCurrentView ] = useState(true);
	const [ userInput, setUserInput ] = useState('');
	const [ signIn, setSignedIn ] = useState(false);

	const handleSubmit = (e) => {
		setSignedIn(true);
		e.preventDefault();
	};

	return (
		<div>
			{view && (
				<Overlay>
					<SignInScreen type="submit" onSubmit={handleSubmit}>
						<label>
							<UserInput
								type="text"
								placeholder="Enter your username"
								onChange={(e) => setUserInput(e.target.value)}
							/>
						</label>
						<label>
							<UserInput type="password" placeholder="Enter your password" />
						</label>
						<StyledButton type="submit" onClick={() => setCurrentView(false)}>
							Login
						</StyledButton>
					</SignInScreen>
				</Overlay>
			)}
			{signIn && <h1>Hi {userInput}!</h1>}
		</div>
	);
};

export default SignIn;
