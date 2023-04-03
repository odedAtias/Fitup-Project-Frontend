// Hooks imports
import { useContext, useState } from 'react';

// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// firebase API imports
import { isExistingEmail } from '../../auth/firebase-config';

// Custom component import
import SignupButton from './SignupButton';
import SignupInput from './SignupInput';
import Spinner from '../Spinner';

// Contexts imports
import { SignupContext } from '../../store/SignupContext';

// Constants
import { alert } from '../../Constants/Alert';

// Step3 component
const Step3 = ({ navigation }) => {
	// Context initialize
	const context = useContext(SignupContext);

	// Load indicator
	const [isLoading, setIsLoading] = useState(false);

	// Step3 Validation function
	const validate = (input, label, prop) => {
		if (!input || !input.trim()) {
			alert(`Invalid ${label}`, `${label} is requierd.\n`);
			return false;
		}
		// Email input case
		if (prop === 'email') {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if (!emailRegex.test(input)) {
				alert('Invalid Email', 'Please enter a valid email address.\n');
				return false;
			}
		}
		// Password / ConfirmPassword case
		else if (prop === 'password') {
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			if (!passwordRegex.test(input)) {
				alert(
					'Invalid Password',
					'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'
				);
				return false;
			}
		} else {
			if (input !== context.password) {
				alert(
					'Passwords do not match',
					'Please make sure that your passwords match and try again.'
				);
				return false;
			}
		}
		return true;
	};
	// Step2 submit handler
	const handleSubmit = async () => {
		if (!validate(context.email, 'Email', 'email')) return;
		if (!validate(context.password, 'Password', 'password')) return;
		if (
			!validate(context.confirmPassword, 'Confirm Password', 'confirmPassword')
		)
			return;
		// Check if the current email is exist in Fitup
		setIsLoading(true);
		try {
			const emailExists = await isExistingEmail(context.email);
			if (emailExists) {
				alert(
					'Email already exists',
					'The email you entered is already exist. Please use a different email address.'
				);
				return;
			}
			setIsLoading(false);
			navigation.navigate('Step4');
		} catch (e) {
			setIsLoading(false);
			alert(e, 'Please try again later');
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<View style={styles.container}>
			<SignupInput
				label='Enter your email'
				inputConfigurations={{
					onChangeText: t => context.setEmail(t),
					autoCorrect: false,
					value: context.email,
				}}
			/>
			<SignupInput
				label='Enter your password'
				inputConfigurations={{
					onChangeText: t => context.setPassword(t),
					autoCorrect: false,
					secureTextEntry: true,
					value: context.password,
				}}
			/>
			<SignupInput
				label='Confirm Password'
				inputConfigurations={{
					onChangeText: t => context.setConfirmPassword(t),
					autoCorrect: false,
					secureTextEntry: true,
					value: context.confirmPassword,
				}}
			/>
			<SignupButton onPress={handleSubmit}>{'Next >'}</SignupButton>
		</View>
	);
};

// Step3 StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: '5%',
		marginTop: '5%',
	},
	spacing: {
		marginBottom: '10%',
	},
});

export default Step3;
