// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, View, Alert } from 'react-native';

// Custom component import
import SignupButton from './SignupButton';
import SignupInput from './SignupInput';

// Contexts imports
import { SignupContext } from '../../store/SignupContext';

// Step2 Component
const Step2 = ({ navigation }) => {
	// Context initialize
	const context = useContext(SignupContext);

	// Step2 Validation function
	const validate = (input, label, prop) => {
		// First condition - input is requierd
		if (!input || !input.trim()) {
			Alert.alert(
				`Invalid ${label}`,
				`${label} is requierd.\n`,
				[
					{
						style: 'cancel',
					},
				],
				{
					titleStyle: styles.alertTitle,
					messageStyle: styles.alertMessage,
					alertContainerStyle: styles.alertContainer,
				}
			);
			return false;
		}
		// Second condition - checking the pattern
		const regex = /^[A-Z][a-z]{1,}$/;
		input = input.trim();
		if (!regex.test(input)) {
			Alert.alert(
				`Invalid ${label}`,
				`${label} must start with an uppercase letter and followed by only lowercase letters with no whitespaces and minimum 2 letters.\n\nPlease make sure is entered correctly.`,
				[
					{
						style: 'cancel',
					},
				],
				{
					titleStyle: styles.alertTitle,
					messageStyle: styles.alertMessage,
					alertContainerStyle: styles.alertContainer,
				}
			);
			return false;
		}
		context[prop] = input;
		return true;
	};

	// Step1 submit handler
	const handleSubmit = () => {
		// Input Validation
		if (!validate(context.firstName, 'First Name', 'firstName')) return;
		if (!validate(context.lastName, 'Last Name', 'lastName')) return;
		navigation.navigate('Step3');
	};

	return (
		<View style={styles.container}>
			<SignupInput
				label='Enter your first name'
				inputConfigurations={{
					onChangeText: t => context.setFirstName(t),
					autoCorrect: false,
					value: context.firstName,
				}}
			/>
			<SignupInput
				label='Enter your last name'
				inputConfigurations={{
					onChangeText: t => context.setLastName(t),
					autoCorrect: false,
					value: context.lastName,
				}}
			/>
			<SignupButton onPress={handleSubmit}>{'Next >'}</SignupButton>
		</View>
	);
};

// Step2 StyleSheet
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
	alertTitle: {
		fontFamily: 'rubik',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	alertMessage: {
		fontFamily: 'rubik',
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 20,
	},
	alertContainer: {
		backgroundColor: '#f2f2f2',
		borderRadius: 10,
		padding: 20,
	},
});

export default Step2;
