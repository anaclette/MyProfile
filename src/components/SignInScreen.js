import styled from 'styled-components';

const SignInScreen = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 600px;
	height: 600px;
`;

const UserInput = styled.input`width: 250px;`;

const SignIn = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleClick = () => {
		console.log('you are logged into your account');
	};
	return (
		<SignInScreen type="submit" onSubmit={handleSubmit}>
			<label>
				<UserInput type="text" placeholder="Enter your username" />
			</label>
			<label>
				<UserInput type="text" placeholder="Enter your password" />
			</label>
			<button onclick={handleClick}> Login </button>
		</SignInScreen>
	);
};

export default SignIn;
