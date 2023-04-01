// Hooks imports
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { View, StyleSheet, LogBox } from 'react-native';

// Firebase Authentication API imports
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../auth/firebase-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['AsyncStorage has been extracted']);

// Custom components imports
import LoginInput from './LoginInput';
import Button from '../Button';

// Constants
import Colors from '../../Constants/Colors';

// Login Component
const LoginForm = () => {
	// navigation object initialize
	const navigation = useNavigation();

	// Login form local state (object contains username and password details)
	const [inputs, setInputs] = useState({
		username: {
			value: '',
			isValid: true,
		},
		password: {
			value: '',
			isValid: true,
		},
	});

	// LoginForm handlers
	const handleInputChange = (inputIdentifier, enteredValue) => {
		setInputs(currentInputs => {
			return {
				...currentInputs,
				// Way to update keys/values dynamically
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};

	// Login submit handler
	const handleSubmit = () => {
		// Submitted case
		signInWithEmailAndPassword(
			authentication,
			inputs.username.value,
			inputs.password.value
		)
			.then(re => {
				console.log(re.user.uid);
				// Check which user logged in
				// Navigate to the adjusted app
				navigation.navigate('TraineeBottomTab');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			<LoginInput
				label='Username'
				iconName='person-sharp'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'username'),
					placeholder: 'Enter your username',
					autoCorrect: false,
					value: inputs.username.value,
				}}
				style={{ textAlign: 'left', fontSize: 16 }}
			/>
			<LoginInput
				label='Password'
				iconName='lock-closed'
				inputConfigurations={{
					onChangeText: handleInputChange.bind(this, 'password'),
					placeholder: 'Enter your password',
					autoCorrect: false,
					secureTextEntry: true,
					value: inputs.password.value,
				}}
				style={{ textAlign: 'left', fontSize: 16 }}
			/>
			{/* Buttons container (sign-in & sign-up) */}
			<View style={styles.buttonsContainer}>
				<Button
					style={{ backgroundColor: Colors.Buttons.primary }}
					onPress={handleSubmit}>
					Sign in
				</Button>
				<Button
					style={{ backgroundColor: Colors.Buttons.secondary }}
					onPress={() => {
						console.log('sign-up handler');
						navigation.navigate('Signup');
					}}>
					Sign up
				</Button>
			</View>
		</>
	);
};

// Login StyleSheet
const styles = StyleSheet.create({
	buttonsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default LoginForm;
