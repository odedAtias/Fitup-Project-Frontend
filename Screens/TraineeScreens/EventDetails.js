// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, View, Alert } from 'react-native';

// Custom components
import EventDetailsCard from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsCard';
import EventParticipants from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';
import EventDetailsDescription from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsDescription';
import Link from '../../Components/UI/Link';

// Contexts imports
import { TraineeContext } from '../../store/TraineeContext';
import { EventsContext } from './../../store/EventsContext';

// Constants
import Colors from '../../Constants/Colors';
import { alert } from '../../Constants/Alert';

// Utils
import { updateData } from '../../utils/http/rest';
import { adjustEvent } from './../../utils/schemas';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	// destructuring the relevant properties form params
	const { description, _id, ...cardDetails } = route.params;

	// context initialize
	const [traineeContext, eventsContext] = [
		useContext(TraineeContext),
		useContext(EventsContext),
	];

	const events = eventsContext.events;
	const trainee = traineeContext.trainee;

	// EventDetails handlers
	const cancelRegistration = async () => {
		// Update the participants on the backend
		const event = { ...route.params };
		event.participants = event.participants.filter(p => p._id !== trainee._id);
		await updateData(`api/events/${_id}`, adjustEvent(event));

		// Update the participants on the context
		const index = events.findIndex(e => e._id === _id);
		const updatedEvents = [...events];
		updatedEvents.splice(index, 1);
		updatedEvents.push(event);
		eventsContext.setEvents(updatedEvents);

		// Update the registeredEvents on the backend
		const newRegisteredEvents = traineeContext.registeredEvents.filter(
			eid => eid !== _id
		);

		const payload = {
			...trainee,
			favoriteTrainers: traineeContext.favoriteTrainers.map(t => t._id),
			registeredEvents: newRegisteredEvents,
		};
		delete payload._id;
		await updateData(`api/trainees/${trainee._id}`, payload);

		// Update the registeredEvents on the context
		traineeContext.setRegisteredEvents(newRegisteredEvents);

		alert(
			'Cancellation Successful!',
			'Your registration for the sport training event has been successfully canceled.'
		);

		navigation.navigate('RegisteredEvents');
	};

	const handleCancelRegistration = async () => {
		Alert.alert(
			'Cancel Registration',
			'Are you sure you want to cancel your registration for this sport training event?',
			[
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: cancelRegistration,
					style: 'destructive',
				},
			],
			{ cancelable: false }
		);
	};

	return (
		<View style={styles.container}>
			<EventDetailsCard {...cardDetails} />
			<EventDetailsDescription description={description} />
			<EventParticipants />
			<View
				style={{
					margin: 20,
					alignItems: 'center',
				}}>
				{/* Only if have place to register */}
				{cardDetails.participants.some(
					p => p._id === traineeContext.trainee._id
				) ? (
					<Link
						style={{
							fontSize: 20,
							textAlign: 'center',
							borderBottomColor: Colors.Links.primary,
							borderBottomWidth: 1,
							width: '40%',
						}}
						onPress={handleCancelRegistration}>
						Cancel registration
					</Link>
				) : (
					<Link
						style={{
							fontSize: 20,
							textAlign: 'center',
							borderBottomColor: Colors.Links.primary,
							borderBottomWidth: 1,
							width: '60%',
						}}
						onPress={() =>
							navigation.navigate('RegisterEvent', { event: route.params })
						}>
						Register now
					</Link>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: Platform.OS === 'ios' ? 30 : 0,
	},
});

export default EventDetails;
