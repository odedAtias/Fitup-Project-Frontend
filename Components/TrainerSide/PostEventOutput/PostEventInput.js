// RN core components & API imports
import {View, Text, StyleSheet, TextInput} from 'react-native';

// Constants
import Colors from '../../../Constants/Colors';

// ManageDetailsInput component
const PostEventInput = ({label, inputConfigurations, invalid}) => {
	const inputStyles = [styles.input];

	if (invalid) {
		inputStyles.push(styles.invalidInput);
	}

	return (
		<View style={styles.container}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput
				style={[inputStyles]}
				placeholderTextColor={'#717181'}
				{...inputConfigurations}
			/>
		</View>
	);
};

// PostEventInput StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},

	label: {
		marginTop: '5%',
		fontSize: 17,
		marginBottom: 10,
		fontFamily: 'rubik',
		fontWeight: '600',
		color: Colors.Texts.primary,
	},
	input: {
		textAlign: 'left',
		fontSize: 17,
		width: '100%',
		fontFamily: 'rubik',
		paddingVertical: 8,
		backgroundColor: Colors.Backgrounds.secondary,
		paddingLeft: 10,
	},
	invalidLabel: {
		color: Colors.Texts.error500,
	},
	invalidInput: {
		backgroundColor: Colors.Texts.error50,
	},
});

export default PostEventInput;
