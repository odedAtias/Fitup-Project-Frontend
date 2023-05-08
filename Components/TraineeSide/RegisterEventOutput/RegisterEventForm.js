// Hooks imports
import { useState, useContext } from 'react';

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
import { updateData } from '../../../utils/http/rest';

// Contexts imports
import { TraineeContext } from './../../../store/TraineeContext';

// RegisterEventForm component
const RegisterEventForm = ({ event }) => {
	const [isChecked, setIsChecked] = useState(false);

	const context = useContext(TraineeContext);

	const updateEvent = async () => {
		try {
			// Update the event document in the backend
			const participantsIds = event.participants.map(p => p._id);
			participantsIds.push(context.trainee._id);
			const { __v, _id, trainer, participants, ...adjustedEvent } = event;
			// Setting the adjusted event properties
			adjustedEvent.trainer = trainer._id;
			adjustedEvent.participants = participantsIds;
			await updateData(`api/events/${_id}`, adjustedEvent);

			// Updating the trainee document in the backend
			const adjustedTrainee = {
				...context.trainee,
				registeredEvents: context.registeredEvents
					? context.registeredEvents.map(r => r._id)
					: [],
				favoriteTrainers: context.favoriteTrainers.map(t => t._id),
			};
			adjustedTrainee.registeredEvents.push(_id);
			await updateData(`api/trainees/${context.trainee._id}`, adjustedTrainee);
			alert(
				'Registration Successful!',
				'Message: Congratulations! You have successfully registered for the training event. We look forward to seeing you there. You will receive a confirmation email shortly with further details. Thank you for choosing to enhance your skills with us!'
			);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCheck = () => {
		setIsChecked(!isChecked);
	};

	const handleSubmit = () => {
		if (!isChecked)
			alert(
				'Please accept the regulations',
				'You must accept the regulations to proceed.'
			);
		else updateEvent();
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
