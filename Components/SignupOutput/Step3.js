// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, View, Alert, Text } from 'react-native';

// firebase API imports
import { isExistingEmail } from '../../auth/firebase-config';

// Custom component import
import SignupButton from './SignupButton';
import SignupInput from './SignupInput';

// Contexts imports
import { SignupContext } from '../../store/SignupContext';

// Step3 component
const Step3 = ({ navigation }) => {
	// Context initialize
	const context = useContext(SignupContext);

	// Step3 Validation function
	const validate = (input, label, prop) => {
		if (!input || !input.trim()) {
			Alert.alert(
				`Invalid ${label}`,
				`${label} is requierd.\n`,
				[
					{
						style: 'cancel',
					},
				],
				{
					titleStyle: styles.alertTitle,
					messageStyle: styles.alertMessage,
					alertContainerStyle: styles.alertContainer,
				}
			);
			return false;
		}
		// Email input case
		if (prop === 'email') {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if (!emailRegex.test(input)) {
				Alert.alert(
					'Invalid Email',
					'Please enter a valid email address.\n',
					[
						{
							style: 'cancel',
						},
					],
					{
						titleStyle: styles.alertTitle,
						messageStyle: styles.alertMessage,
						alertContainerStyle: styles.alertContainer,
					}
				);
				return false;
			}
		}
		// Password / ConfirmPassword case
		else if (prop === 'password') {
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			if (!passwordRegex.test(input)) {
				Alert.alert(
					'Invalid Password',
					'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.',
					[
						{
							style: 'cancel',
						},
					],
					{
						titleStyle: styles.alertTitle,
						messageStyle: styles.alertMessage,
						alertContainerStyle: styles.alertContainer,
					}
				);
				return false;
			}
		} else {
			if (input !== context.password) {
				Alert.alert(
					'Passwords do not match',
					'Please make sure that your passwords match and try again.',
					[
						{
							style: 'cancel',
						},
					],
					{
						titleStyle: styles.alertTitle,
						messageStyle: styles.alertMessage,
						alertContainerStyle: styles.alertContainer,
					}
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
		const emailExists = await isExistingEmail(context.email);
		if (emailExists) {
			Alert.alert(
				'Email already exists',
				'The email you entered is already exist. Please use a different email address.',
				[
					{
						style: 'cancel',
					},
				],
				{
					titleStyle: styles.alertTitle,
					messageStyle: styles.alertMessage,
					alertContainerStyle: styles.alertContainer,
				}
			);
			return;
		}
		navigation.navigate('Step4');
	};

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
	alertTitle: {
		fontFamily: 'rubik',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	alertMessage: {
		fontFamily: 'rubik',
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 20,
	},
	alertContainer: {
		backgroundColor: '#f2f2f2',
		borderRadius: 10,
		padding: 20,
	},
});

export default Step3;
