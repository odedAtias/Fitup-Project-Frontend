// RN core components & API imports
import { View, Text, StyleSheet, Pressable } from 'react-native';
// Custom components imports
import Input from '../Components/Input';
import Button from '../Components/Button';
import Logo from '../Components/Logo';
// Constants
import Colors from './../Constants/Colors';

// Login Component
const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Logo */}
			<View style={styles.logoContainer}>
				<Logo imageWidth={260} imageHeight={220} />
			</View>
			<Input
				label='Username'
				iconName='person-sharp'
				inputConfigurations={{
					onChangeText: () => {},
					placeholder: 'Enter your username',
					autoCorrect: false,
				}}
				style={{ textAlign: 'left' }}
			/>
			<Input
				label='Password'
				iconName='lock-closed'
				inputConfigurations={{
					onChangeText: () => {},
					placeholder: 'Enter your password',
					autoCorrect: false,
					secureTextEntry: true,
				}}
				style={{ textAlign: 'left' }}
			/>
			{/* Buttons container (sign-in & sign-up) */}
			<View style={styles.buttonsContainer}>
				<Button
					style={{ backgroundColor: Colors.Buttons.primary }}
					onPress={() => {
						console.log('sign-in handler');
						console.log('username & password authentication ...');
						navigation.navigate('TraineeBottomTab');
					}}>
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
	buttonsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
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
