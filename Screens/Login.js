// Hooks imports
import { useState } from 'react';

// RN core components & API imports
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native';

// Custom components imports
import LoginForm from '../Components/LoginOutput/LoginForm';
import Logo from '../Components/Logo';
import Link from '../Components/Link';
import Spinner from '../Components/Spinner';

// Login Component
const Login = ({ navigation }) => {
	// Load indicator
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <Spinner />;
	} else {
		return (
			<ScrollView style={styles.screen}>
				<KeyboardAvoidingView style={styles.screen}>
					<View style={styles.container}>
						{/* Logo */}
						<View style={styles.logoContainer}>
							<Logo imageWidth={260} imageHeight={220} />
						</View>
						{/* Login form  */}
						<LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
						{/* Forgot Password link */}
						<View style={styles.forgotPasswordContainer}>
							<Text style={[styles.forgotPasswordText, styles.text]}>
								Forgot password ?
							</Text>
							<Link
								onPress={() => {
									console.log('forgot password Pressed ...');
									navigation.navigate('ForgotPassword');
								}}
								style={{ fontSize: 20 }}>
								Click here
							</Link>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
};

// Login StyleSheet
const styles = StyleSheet.create({
	text: {
		fontFamily: 'rubik',
	},
	container: {
		flex: 1,
		marginHorizontal: 24,
		marginTop: '10%',
	},
	forgotPasswordContainer: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	forgotPasswordText: {
		fontSize: 18,
		marginRight: 3,
	},
	logoContainer: {
		height: '20%',
		marginBottom: '10%',
	},
	screen: {
		flex: 1,
	},
});

export default Login;
