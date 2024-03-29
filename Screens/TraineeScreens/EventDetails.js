// Hooks imports
import {useContext, useLayoutEffect} from 'react';

// RN core components & API imports
import {Alert, StyleSheet, View} from 'react-native';

// Custom components
import EventDetailsCard from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsCard';
import EventDetailsDescription from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsDescription';
import EventParticipants from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';
import Button from '../../Components/UI/Button';
import Header from '../../Components/UI/Header';

// Contexts imports
import {TraineeContext} from '../../store/TraineeContext';
import {EventsContext} from './../../store/EventsContext';

// Constants
import {alert} from '../../Constants/Alert';
import Colors from '../../Constants/Colors';

// Utils
import {updateData} from '../../utils/http/rest';
import {adjustEvent} from './../../utils/schemas';

// EventDetails component
const EventDetails = ({navigation, route}) => {
	// destructuring the relevant properties form params
	const {description, _id, ...cardDetails} = route.params;

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
		const event = {...route.params};
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

		navigation.navigate('Categories');
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
			{cancelable: false}
		);
	};

	if (cardDetails.trainerSide) {
		useLayoutEffect(() => {
			navigation.setOptions({
				header: ({navigation}) => (
					<Header
						label={'Fit\nUp'}
						containerStyle={{
							backgroundColor: Colors.Headers.primary,
							padding: Platform.OS === 'ios' ? 10 : 10,
							paddingTop: Platform.OS === 'ios' ? 10 : 30,
						}}
						labelStyle={{
							fontSize: 50,
							color: Colors.Texts.primary,
						}}
						onPressLeft={() => navigation.goBack()}
						onPressRight={() =>
							navigation.navigate('ManageEvent', {eventId: _id})
						}
						rightButton={'create-outline'}
					/>
				),
				contentStyle: {
					backgroundColor: 'white',
				},
			});
		}, [_id, navigation]);
	}

	return (
		<View style={styles.container}>
			<EventDetailsCard
				{...cardDetails}
				trainerSide={cardDetails.trainerSide}
			/>
			<EventDetailsDescription description={description} />
			<EventParticipants
				participants={cardDetails.participants}
				trainerSide={cardDetails.trainerSide}
			/>
			<View
				style={{
					alignItems: 'center',
					marginHorizontal: 15,
				}}
			>
				{/* Only if have place to register */}
				{cardDetails.participants.some(
					p => p._id === traineeContext.trainee._id
				) ? (
					<Button
						style={{backgroundColor: 'red', width: '100%'}}
						textStyle={{fontSize: 18}}
						onPress={handleCancelRegistration}
					>
						Cancel registration
					</Button>
				) : cardDetails.participants.length >= cardDetails.maxParticipants ||
				  cardDetails.trainerSide ? (
					<></>
				) : (
					<Button
						style={{backgroundColor: Colors.Buttons.fourth, width: '100%'}}
						textStyle={{fontSize: 18}}
						onPress={() =>
							navigation.navigate('RegisterEvent', {event: route.params})
						}
					>
						Register now
					</Button>
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
