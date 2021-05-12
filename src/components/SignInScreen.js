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
	left: 520px;
	top: 130px;
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
	const [hi, setHi] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

	};
	
	const handleClickLogin = () => {
		setCurrentView(false);
	};

	return (
		<>
			{view && (
				<Overlay>
				<SignInScreen type="submit" onSubmit={handleSubmit}>
					<label>
						<UserInput type="text" placeholder="Enter your username" onChange={(e)=> {hi && setHi(<h1>{e.target.value}</h1>)}} />
					</label>
					<label>
						<UserInput type="password" placeholder="Enter your password" />
					</label>
					<StyledButton onClick={handleClickLogin}> Login </StyledButton>
					
				</SignInScreen>
			
		</Overlay> )}
		</>
	);
};

export default SignIn;
