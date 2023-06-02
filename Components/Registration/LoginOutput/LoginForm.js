// Hooks imports
import {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {View, StyleSheet, LogBox} from 'react-native';

// Firebase Authentication API imports
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../auth/firebase-config';

import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['AsyncStorage has been extracted']);

// Utils
import {fetchData} from '../../../utils/http/rest';

// Custom components imports
import LoginInput from './LoginInput';
import Button from '../../UI/Button';

// Context import
import {TraineeContext} from '../../../store/TraineeContext';
import {EventsContext} from './../../../store/EventsContext';

// Constants
import Colors from '../../../Constants/Colors';

// Constants
import {alert} from '../../../Constants/Alert';

// Login Component
const LoginForm = ({isLoading, setIsLoading}) => {
	// context initialize
	const traineeContext = useContext(TraineeContext);
	const eventsContext = useContext(EventsContext);

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
				[inputIdentifier]: {value: enteredValue, isValid: true},
			};
		});
	};

	// fetch user data
	const fetchUserData = async id => {
		let response1 = await fetchData(`api/trainees/${id}`);
		let response2 = await fetchData('api/events');
		// Check if the user's type is trainee
		if (response1 && response2) {
			const [trainee, events] = [response1.data, response2.data];
			const {__v, favoriteTrainers, registeredEvents, ...rest} = trainee;
			// Set the data in the store
			traineeContext.setTrainee(rest);
			traineeContext.setFavoriteTrainers(favoriteTrainers);
			traineeContext.setRegisteredEvents(registeredEvents);
			eventsContext.setEvents(events);
			return 'Trainee';
		} else {
			response1 = await fetchData(`api/trainers/login/${id}`);
			if (response1) {
				return 'Trainer';
			}
		}
	};

	// Login submit handler
	const handleSubmit = async () => {
		setIsLoading(true);
		// Submitted case
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				inputs.username.value,
				inputs.password.value
			);
			if (userCredential.user) {
				if (userCredential.user.emailVerified) {
					const result = await fetchUserData(userCredential.user.uid);
					if (result === 'Trainee') navigation.navigate('TraineeBottomTab');
					else {
						navigation.navigate('TrainerBottomTab');
					}
				} else {
					alert(
						'Email verification error',
						'Please verify your email before logging in'
					);
				}
			}
			// Navigate by case
		} catch (error) {
			alert(
				'Login Error',
				'We were unable to log you in. Please double-check your username and password and try again. If you continue to have trouble, please contact customer support for assistance.'
			);
		} finally {
			setIsLoading(false);
		}
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
				style={{textAlign: 'left', fontSize: 16}}
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
				style={{textAlign: 'left', fontSize: 16}}
			/>
			{/* Buttons container (sign-in & sign-up) */}
			<View style={styles.buttonsContainer}>
				<Button
					style={{backgroundColor: Colors.Buttons.primary}}
					onPress={handleSubmit}
				>
					Sign in
				</Button>
				<Button
					style={{backgroundColor: Colors.Buttons.secondary}}
					onPress={() => {
						navigation.navigate('Signup');
					}}
				>
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
