// Hooks imports
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// RN core components & API imports
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
// Costants
import Colors from '../../Constants/Colors';
// Custom components imports
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
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView stlye={styles.screen} behavior='padding'>
				<View style={styles.container}>
					<SignupInput
						label='First Name'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'firstName'),

							autoCorrect: false,
							value: inputs.firstName.value,
						}}
					/>
					<SignupInput
						label='Last Name'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'lastName'),
							autoCorrect: false,
							value: inputs.lastName.value,
						}}
					/>
					<SignupInput
						label='Email'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'email'),
							autoCorrect: false,
							value: inputs.email.value,
						}}
					/>
					<SignupInput
						label='Password'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'password'),
							autoCorrect: false,
							secureTextEntry: true,
							value: inputs.password.value,
						}}
					/>
					<SignupInput
						label='Confirm Password'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'confirmPassword'),
							autoCorrect: false,
							secureTextEntry: true,
							value: inputs.confirmPassword.value,
						}}
					/>
					<SignupInput
						label='Trainee / Trainer'
						inputConfigurations={{
							onChangeText: handleInputChange.bind(this, 'userType'),
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
							Register now
						</Button>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};
const handleSubmit = () => {
	navigation.navigate('Login');
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},
	screen: {
		flex: 1,
	},
});

export default SignupForm;
