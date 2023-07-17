// Hooks imports
import {useContext, useState} from 'react';

// RN core components & API imports
import {ScrollView, StyleSheet, View} from 'react-native';

// Contexts imports
import {TrainerContext} from '../../store/TrainerContext';

// Custom components imports
import ManageEventForm from '../../Components/TrainerSide/ManageEventOutput/ManageEventForm';

// Utils
import {updateData, deleteData} from '../../utils/http/rest';

// Constants
import {alert} from '../../Constants/Alert';

// ManageEvent Component
const ManageEvent = ({navigation, route}) => {
	const tcx = useContext(TrainerContext);
	const event = tcx.events.find(e => e._id === route.params.eventId);

	const [isLoading, setIsLoading] = useState(false);

	// const removeEventFromTrainee = async traineeId => {
	// 	await deleteData(`/api/trainees/${traineeId}/${event._id}`);
	// };

	const handleDelete = async () => {
		try {
			// Backend - Delete from events collection
			await deleteData(`/api/events/${event._id}`);
			// Backend - Delete the eventId from trainer events
			const trainerEvents = tcx.events
				.filter(e => e._id !== event._id)
				.map(e => e._id);
			const trainerPayload = {
				_id: tcx.trainer._id,
				userId: tcx.trainer.userId,
				firstName: tcx.trainer.firstName,
				lastName: tcx.trainer.lastName,
				email: tcx.trainer.email,
				events: trainerEvents,
				description: tcx.trainer.description
					? tcx.trainer.description
					: `Hi, I'm ${
							tcx.trainer.firstName + ' ' + tcx.trainer.lastName
					  }, an experienced FitUp trainer passionate about helping you reach your fitness goals. With personalized training plans and unwavering support, let's make progress and transform your fitness journey. Let's start this empowering fitness partnership today!`,
				image: tcx.trainer.image,
				height: tcx.trainer.height,
				weight: tcx.trainer.weight,
				timeStamp: tcx.trainer.timeStamp,
			};
			await updateData(`/api/trainers/${tcx.trainer._id}`, trainerPayload);
			// Backend - Delete the eventId from trainee registered events
			// event.participants.forEach(async p => await removeEventFromTrainee(p));
			// Frontend - Update Events context
			const relevantEvents = tcx.events.filter(e => e._id !== event._id);
			// Match case
			alert(
				'Delete event success',
				'Your event was deleted from our system.',
				() => {
					tcx.setEvents(relevantEvents);
				}
			);
			navigation.navigate('Welcome');
		} catch (err) {
			console.log('connection error ...', err);
		}
	};

	const handleSubmit = async input => {
		// Backend - Update the event on the events collection
		const eventPayload = {
			address: input.address.value,
			category: input.category.value,
			city: input.city.value,
			date: input.date.value,
			description: input.description.value,
			hour: input.hour.value,
			maxParticipants: +input.maxParticipants.value,
			price: +input.price.value,
			trainer: tcx.trainer._id,
			participants: event.participants.map(p => p._id),
		};
		try {
			await updateData(`/api/events/${event._id}`, eventPayload);
		} catch (err) {
			console.log('connection error', err);
		}
		// Frontend - Update the event on the context
		eventPayload.trainer = event.trainer;
		eventPayload.participants = event.participants;
		eventPayload._id = event._id;
		eventPayload.__v = event.__v;
		const events = [...tcx.events];
		const index = events.indexOf(event);
		events[index] = eventPayload;
		tcx.setEvents(events);
		// Navigate to the home page
		alert(
			'Event Updated Successfully',
			"We're happy to tell you that your event has been upadted successfully!",
			() => navigation.navigate('Welcome')
		);
	};

	if (event) {
		return (
			<ScrollView style={styles.scrolling}>
				<View style={styles.container}>
					<ManageEventForm
						event={event}
						navigation={navigation}
						onSubmit={handleSubmit}
						onDelete={handleDelete}
					/>
				</View>
			</ScrollView>
		);
	}
};

// PostEvent StyleSheet
const styles = StyleSheet.create({
	scrolling: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		paddingVertical: '5%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 22,
		fontWeight: '600',
		textAlign: 'left',
		marginLeft: '5%',
		marginVertical: '5%',
	},
});

export default ManageEvent;
