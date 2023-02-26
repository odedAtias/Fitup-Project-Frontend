// RN core components & API imports
import { View, Text, StyleSheet, Pressable } from 'react-native';
// Custom components imports
import LoginForm from '../Components/LoginOutput/LoginForm';
import Logo from '../Components/Logo';
// Constants
import Colors from '../Constants/Colors';

// Login Component
const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Logo */}
			<View style={styles.logoContainer}>
				<Logo imageWidth={260} imageHeight={220} />
			</View>
			{/* Login form  */}
			<LoginForm />
			{/* Forgot Password link */}
			<View style={styles.forgotPasswordOuterContainer}>
				<Text style={styles.forgotPasswordText}>Forgot password ?</Text>
				<Pressable
					onPress={() => {
						console.log('forgot password Pressed ...');
						navigation.navigate('ForgotPassword');
					}}>
					<Text style={[styles.forgotPasswordText, styles.forgotPasswordLink]}>
						click here
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

// Login StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 24,
		marginTop: '20%',
	},

	forgotPasswordOuterContainer: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	forgotPasswordText: {
		fontSize: 16,
	},
	forgotPasswordLink: {
		marginLeft: 3,
		color: Colors.Links.primary,
	},
	logoContainer: {
		height: '20%',
	},
});

export default Login;
