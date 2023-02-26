// RN core components & API imports
import { View, Text, StyleSheet, TextInput } from 'react-native';

// Ionicons imports
import { Ionicons } from '@expo/vector-icons';

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
		marginVertical: '5%',
	},
	label: {
		fontSize: 18,
	},
	input: {
		textAlign: 'left',
		fontSize: 16,
		borderBottomColor: Colors.Texts.primary,
		borderBottomWidth: 1,
		paddingVertical: 5,
	},
});

export default SignupInput;
