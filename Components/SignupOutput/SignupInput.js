// RN core components & API imports
import { View, Text, StyleSheet, TextInput } from 'react-native';

// Constants
import Colors from '../../Constants/Colors';

// SignpuInput component
const SignupInput = ({ label, inputConfigurations }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} {...inputConfigurations} />
		</View>
	);
};

// SignupInput StyleSheet
const styles = StyleSheet.create({
	container: {
		marginBottom: '5%',
	},

	label: {
		fontSize: 18,
		marginBottom: 5,
	},
	input: {
		textAlign: 'left',
		padding: '2%',
		fontSize: 16,
		backgroundColor: Colors.Backgrounds.input,
		width: '100%',
	},
});

export default SignupInput;
