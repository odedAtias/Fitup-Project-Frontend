// Hooks imports
import {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {View, Text, StyleSheet, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';

// Custom components imports
import Button from '../../UI/Button';
import TextBox from '../../UI/TextBox';

// Constants
import Colors from '../../../Constants/Colors';
import {alert} from '../../../Constants/Alert';

// Utills
import {TEXT} from '../../../utils/regulations';
import {updateData} from '../../../utils/http/rest';
import {adjustEvent} from './../../../utils/schemas';

// Contexts imports
import {TraineeContext} from './../../../store/TraineeContext';
import {EventsContext} from '../../../store/EventsContext';

// RegisterEventForm component
const RegisterEventForm = ({eventId}) => {
	const navigation = useNavigation();

	const [isClicked, setIsClicked] = useState(false);

	const [isChecked, setIsChecked] = useState(false);

	const [traineeContext, eventsContext] = [
		useContext(TraineeContext),
		useContext(EventsContext),
	];

	const handleCheck = () => {
		setIsChecked(!isChecked);
	};

	const registerEvent = async () => {
		// Update the participants on the backend
		const event = eventsContext.events.find(e => e._id === eventId);
		const index = eventsContext.events.indexOf(event);
		const {userId, email, ...participant} = traineeContext.trainee;
		event.participants.push(participant);
		let res1 = await updateData(`api/events/${eventId}`, adjustEvent(event));

		// Update the participans on the context
		const updatedEvents = [...eventsContext.events];
		updatedEvents.splice(index, 1);
		updatedEvents.push(event);
		eventsContext.setEvents(updatedEvents);

		// Update the registeredEvents on the backend
		const updatedRegisteredEvents = [...traineeContext.registeredEvents];
		updatedRegisteredEvents.push(eventId);
		const trainee = {
			...traineeContext.trainee,
			favoriteTrainers: [...traineeContext.favoriteTrainers].map(t => t._id),
			registeredEvents: updatedRegisteredEvents,
		};
		delete trainee._id;
		let res2 = await updateData(
			`api/trainees/${traineeContext.trainee._id}`,
			trainee
		);

		// Update the registeredEvents on the context
		traineeContext.setRegisteredEvents(updatedRegisteredEvents);
	};

	const handleSubmit = async () => {
		if (!isChecked)
			alert(
				'Please accept the regulations',
				'You must accept the regulations to proceed.'
			);
		else if (isClicked) return;
		else {
			setIsClicked(true);
			console.log('Register to the event handler ...');
			try {
				await registerEvent();
				alert(
					'Registration Successful!',
					'Congratulations! You have successfully registered for the training event. We look forward to seeing you there. You will receive a confirmation email shortly with further details. Thank you for choosing to enhance your skills with us!'
				);
				navigation.navigate('Categories');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<View style={styles.container}>
			<TextBox
				bgColor={Colors.Backgrounds.third}
				txtColor={Colors.Texts.primary}
				maxHeight={400}
			>
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
			<View style={{alignItems: 'center'}}>
				<Button
					style={{backgroundColor: Colors.Buttons.secondary}}
					onPress={handleSubmit}
				>
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
