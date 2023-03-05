// RN Core compenents & API imports
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

// ForgotPassword Component
const ForgotPassword = () => {
	return (
		<View style={styles.MainContainer}>
			<View style={styles.Container}>
				<Text style={styles.TextContainer}>Forget your password?</Text>
			</View>
			<View style={styles.PressableContainer}>
				<TextInput style={styles.TextInputStyle} placeholder='Your Email' />
			</View>
			<Button title='Send Email' color='#79AD94' style={styles.ButtonStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	MainContainer: {
		paddingVertical: 20,
	},
	Container: {
		alignItems: 'center',
		margin: 20,
	},
	TextContainer: {
		fontSize: 20,
	},
	TextInputStyle: {
		backgroundColor: '#79AD94',
	},
	ButtonStyle: {
		fontSize: 20,
	},
	PressableContainer: {
		marginHorizontal: 10,
		marginBottom: 20,
	},
});

export default ForgotPassword;
