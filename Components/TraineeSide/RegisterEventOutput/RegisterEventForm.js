// Hooks imports
import { useState } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

// Custom components imports
import Button from '../../UI/Button';
import TextBox from '../../UI/TextBox';

// Constants
import Colors from '../../../Constants/Colors';
import { alert } from '../../../Constants/Alert';

// Utills
import { TEXT } from '../../../utils/regulations';

// RegisterEventForm component
const RegisterEventForm = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheck = () => {
		setIsChecked(!isChecked);
	};

	const handleSubmit = () => {
		// handle form submission
		if (!isChecked) {
			alert(
				'Please Accept the Regulations',
				'You must accept the regulations to proceed.'
			);
			return;
		}
	};

	return (
		<View style={styles.container}>
			<TextBox
				bgColor={Colors.Backgrounds.third}
				txtColor={Colors.Texts.primary}
				maxHeight={400}>
				{TEXT}
			</TextBox>
			<View style={styles.checkBoxContainer}>
				<Checkbox
					value={isChecked}
					onValueChange={handleCheck}
					style={styles.checkbox}
				/>
				<Text>I have read and agree to all the terms</Text>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Button
					style={{ backgroundColor: Colors.Buttons.secondary }}
					onPress={handleSubmit}>
					Accept
				</Button>
			</View>
		</View>
	);
};

// RegisterEventForm StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	checkBoxContainer: {
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
	},
	checkbox: {
		marginRight: 5,
	},
});

export default RegisterEventForm;
