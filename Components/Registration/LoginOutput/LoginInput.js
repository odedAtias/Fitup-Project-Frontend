// RN core components & API imports
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Ionicons imports
import { Ionicons } from '@expo/vector-icons';

// Constants
import Colors from '../../../Constants/Colors';

// Input component
const LoginInput = ({
	label,
	inputConfigurations,
	iconName,
	style,
	labelStyle,
	containerStyle,
}) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<View style={styles.labelContainer}>
				<Text style={[styles.label, labelStyle]}>{label}</Text>
				{iconName && <Ionicons name={iconName} size={30} />}
			</View>
			<TextInput {...inputConfigurations} style={[styles.input, style]} />
		</View>
	);
};

// LoginInput StyleSheet
const styles = StyleSheet.create({
	container: {
		marginVertical: 24,
	},
	labelContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	label: {
		fontSize: 20,
		fontFamily: 'rubik',
		fontWeight: '600',
	},
	input: {
		borderBottomColor: Colors.Texts.primary,
		borderBottomWidth: 1,
		paddingVertical: 5,
		fontSize: 30,
	},
	font: {
		fontFamily: 'montserrat',
	},
});

export default LoginInput;
