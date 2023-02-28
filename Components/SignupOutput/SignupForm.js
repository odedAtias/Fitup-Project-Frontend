// Hooks imports
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Costants
import Colors from '../../Constants/Colors';

// Custom components imports
import LoginInput from '../LoginOutput/LoginInput';
import SignupInput from './SignupInput';
import Button from '../Button';

// SignupForm Component
const SignupForm = () => {
	// navigation object initiallize
	const navigation = useNavigation();
	// Selcted type state (trainee or trainer)
	const [selectedType, setSelectedType] = useState('');
	// Signup form local state (object contains full name, email, password, confirm password, and user type (trainee|trainer))
	const [inputs, setInputs] = useState({
		firstName: {
			value: '',
			isValid: true,
		},
		lastName: {
			value: '',
			isValid: true,
		},
		email: {
			value: '',
			isValid: true,
		},
		password: {
			value: '',
			isValid: true,
		},
		confirmPassword: {
			value: '',
			isValid: true,
		},
		userType: {
			value: '',
			isValid: true,
		},
	});
	// SignupForm handlers
	const handleInputChange = (inputIdertifier, entredValue) => {
		setInputs(currentInputs => {
			return {
				...currentInputs,
				// Way to update keys/values dynamically
				[inputIdertifier]: { value: entredValue, isValid: true },
			};
		});
	};
	return (
		<View style={styles.container}>
			<SignupInput
				label='First Name'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'firstName'),
					placeholder: 'Enter your first name',
					autoCorrect: false,
					value: inputs.firstName.value,
				}}
			/>
			<SignupInput
				label='Last Name'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'lastName'),
					placeholder: 'Enter your last name',
					autoCorrect: false,
					value: inputs.lastName.value,
				}}
			/>
			<SignupInput
				label='Email'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'email'),
					placeholder: 'Enter your email',
					autoCorrect: false,
					value: inputs.email.value,
				}}
			/>
			<SignupInput
				label='Password'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'password'),
					placeholder: 'Enter your email',
					autoCorrect: false,
					secureTextEntry: true,
					value: inputs.email.value,
				}}
			/>
			<SignupInput
				label='Confirm Password'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'confirmPassword'),
					placeholder: 'Enter your password again',
					autoCorrect: false,
					secureTextEntry: true,
					value: inputs.email.value,
				}}
			/>
			<SignupInput
				label='Trainee / Trainer'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'confirmPassword'),
					placeholder: 'Enter your type',
					autoCorrect: false,
					secureTextEntry: true,
					value: inputs.userType.value,
				}}
			/>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Button
					style={{ backgroundColor: Colors.Buttons.primary }}
					onPress={() => {
						console.log('sign-up handler');
						navigation.navigate('Login');
					}}>
					Confirm
				</Button>
			</View>
		</View>
	);
};
const handleSubmit = () => {
	navigation.navigate('Login');
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',

		flex: 1,
		backgroundColor: 'white',
		marginHorizontal: '5%',
		borderTopLeftRadius: 20,
		borderBottomRightRadius: 20,
		paddingHorizontal: '5%',
		overflow: 'hidden',
	},
});

export default SignupForm;
