// Hooks imports
import { useContext, useEffect } from 'react';

// RN core components & API imports
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	Alert,
	Linking,
} from 'react-native';

// Contexts imports
import { SignupContext } from '../../store/SignupContext';

// Custom component import
import SignupButton from './SignupButton';
import SignupInput from './SignupInput';

// Step4 component
const Step4 = () => {
	// Context initialize
	const context = useContext(SignupContext);

	// Sending mail to the current mail

	// Step4 submit handler
	const handleSubmit = async () => {
		console.log('here');
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.headingText, styles.spacing]}>
				We're almost done
			</Text>
			<Text style={[styles.text]}>
				We have sent a pin code to your email. Please enter it here.
			</Text>
			<SignupInput
				inputConfigurations={{
					// onChangeText: t => context.setLastName(t),
					autoCorrect: false,
					value: context.lastName,
				}}
			/>
			<SignupButton onPress={handleSubmit}>Let' get started</SignupButton>
			<Image
				source={require('../../Images/Signup/step4.png')}
				style={{
					width: 230,
					height: 230,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginTop: '5%',
				}}></Image>
		</View>
	);
};

// Step4 StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: '5%',
		marginTop: '5%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 26,
		fontWeight: '600',
		textAlign: 'left',
	},
	spacing: {
		marginBottom: '10%',
	},
	text: {
		fontFamily: 'rubik',
		fontSize: 19,
		fontWeight: '600',
		textAlign: 'left',
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

export default Step4;
