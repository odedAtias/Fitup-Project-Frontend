// Hooks imports
import {useState} from 'react';

// RN Core compenents & API imports
import {View, Text, StyleSheet, Image} from 'react-native';

// Custom components imports
import SignupButton from '../../Components/Registration/SignupOutput/SignupButton';
import SignupInput from '../../Components/Registration/SignupOutput/SignupInput';

// Firebase imports
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

// Constatns
import {alert} from '../../Constants/Alert';

// ForgotPassword Component
const ForgotPassword = ({navigation}) => {
	// entered email state
	const [email, setEmail] = useState('');

	// Loading indicator
	const [isLoading, setIsLoading] = useState(false);

	// Auth initialize
	const auth = getAuth();

	// ForgotPassword handlers
	async function handleResetPassword() {
		try {
			await sendPasswordResetEmail(auth, email);
			alert(
				'Password Reset Sent',
				'We have sent you an email with instructions to reset your password. Please check your inbox.'
			);
			navigation.navigate('Login');
		} catch (error) {
			alert(
				'Password Reset Failed',
				'Oops! Something went wrong while resetting your password. Please try again later.'
			);
		}
	}

	if (isLoading) {
		return (
			<View style={styles.spinnerContainer}>
				<Spinner2 />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Forgot Your Password?</Text>
			<SignupInput
				label="Enter your email and we'll send you a link to reset your password"
				inputConfigurations={{
					onChangeText: email => setEmail(email),
					autoCorrect: false,
				}}
			/>
			<View style={styles.button}>
				<SignupButton children={'Send Email'} onPress={handleResetPassword} />
			</View>
			<View>
				<Image
					style={styles.image}
					source={require('./../../Images/Signup/forgotPassword.png')}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 5,
		// paddingHorizontal: '2%',
		marginTop: 25,
	},
	title: {
		fontSize: 24,
		paddingHorizontal: '5%',
		marginBottom: '4%',
	},
	button: {
		paddingHorizontal: 40,
	},
	image: {
		width: 230,
		height: 230,
		alignSelf: 'center',
	},
	spinnerContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginBottom: '30%',
	},
});

export default ForgotPassword;
