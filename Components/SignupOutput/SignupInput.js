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
		paddingHorizontal: '5%',
	},

	label: {
		marginTop: '5%',
		fontSize: 21,
		marginBottom: 10,
		fontFamily: 'rubik',
		fontWeight: '600',
		color: Colors.Texts.primary,
	},
	input: {
		textAlign: 'left',
		fontSize: 16,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '100%',
		fontFamily: 'rubik',
	},
});

export default SignupInput;
