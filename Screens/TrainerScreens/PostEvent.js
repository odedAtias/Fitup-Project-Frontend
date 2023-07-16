// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// Contexts imports
import {TrainerContext} from '../../store/TrainerContext';

// Custom components imports
import PostEventForm from '../../Components/TrainerSide/PostEventOutput/PostEventForm';

// Utils
import {postData, updateData} from '../../utils/http/rest';

// Constants
import {alert} from '../../Constants/Alert';

// PostEvent StyleSheet
const PostEvent = ({navigation}) => {
	const tcx = useContext(TrainerContext);
	const handleSubmit = async event => {
		// Backend -  Post event to events collection (get back id of the event from mongoDB)
		const eventPayload = {
			address: event.address.value,
			category: event.category.value,
			city: event.city.value,
			date: event.date.value,
			description: event.description.value,
			hour: event.hour.value,
			maxParticipants: +event.maxParticipants.value,
			price: +event.price.value,
			trainer: tcx.trainer._id,
			participants: [],
		};
		try {
			let response = await postData('api/events', eventPayload);
			const eventId = response.data._id;

			// Backend - update event on the events list of the trainer
			const trainerPayload = {
				...tcx.trainer,
				events: [...tcx.events.map(e => e._id), eventId],
			};
			response = await updateData(
				`api/trainers/${tcx.trainer._id}`,
				trainerPayload
			);
			// Frontend - update event on the trainers events list on the context
			tcx.setEvents([...tcx.events, {_id: eventId, ...eventPayload}]);
			// Navigate to the home page
			alert(
				'Event Posted Successfully',
				"We're happy to tell you that your event has been posted successfully!",
				() => navigation.navigate('Welcome')
			);
		} catch (err) {
			console.log('Connection error', err);
		}
	};

	return (
		<ScrollView style={styles.scrolling}>
			<View style={styles.container}>
				{/* Heading */}
				<Text style={styles.headingText}>Create a New Training Event</Text>
				{/* Form */}
				<PostEventForm onSubmit={handleSubmit} />
			</View>
		</ScrollView>
	);
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

export default PostEvent;
