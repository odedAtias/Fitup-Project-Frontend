// Hooks imports
import { useContext, useEffect } from 'react';

// RN core components & API imports
import { StyleSheet, Text, View, Image } from 'react-native';

// Contexts imports
import { SignupContext } from '../../../store/SignupContext';

// Custom component import
import SignupButton from './SignupButton';

// utils
import { postData } from './../../../utils/http';

// Firebase imports
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';

// Constants
import Colors from '../../../Constants/Colors';

// Step4 component
const Step4 = ({ navigation }) => {
	// Context initialize
	const context = useContext(SignupContext);
	// Creating user in firebase auth & sending email verification
	useEffect(() => {
		async function createNewUser() {
			try {
				// getting the auth vaule
				const auth = getAuth();

				// getting user credential from firebase auth
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					context.email,
					context.password
				);

				// getting the user from the fullfield promise
				const user = userCredential.user;

				// send email verification
				await sendEmailVerification(user);

				// Posting new user in the mongoDB collection (by user type)
				const payload = {
					userId: user.uid,
					firstName: context.firstName,
					lastName: context.lastName,
					email: context.email,
				};

				if (context.type === 'trainee') {
					await postData('api/trainees', payload);
				} else if (context.type === 'trainer') {
					await postData('api/trainers', payload);
				} else {
					console.log('Something failed ...');
				}
			} catch (error) {
				console.log(error);
			}
		}
		if (context.type) {
			createNewUser();
		}
	}, []);

	const handleSubmit = () => {
		navigation.navigate('Login');
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.headingText, styles.spacing]}>
				We're almost done
			</Text>
			<Text style={[styles.text, styles.spacing]}>
				We have sent you an email verification link. please click on the link in
				the email to verify your account before signing in.
			</Text>
			<Text style={styles.note}>
				Check in the spam or junk folder if you dont recieve the email in your
				inbox.
			</Text>
			<SignupButton onPress={handleSubmit}>Let' get started</SignupButton>
			<Image
				source={require('../../../Images/Signup/step4.png')}
				style={{
					width: 230,
					height: 230,
					resizeMode: 'contain',
					alignSelf: 'center',
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
	note: {
		fontFamily: 'rubik',
		fontSize: 17,
		textAlign: 'left',
		fontWeight: '600',
		color: 'grey',
	},
});

export default Step4;
