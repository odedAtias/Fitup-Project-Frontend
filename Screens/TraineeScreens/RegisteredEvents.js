// Hooks imports
import {useContext, useEffect} from 'react';

// RN core components & API imports
import {View, Text, StyleSheet} from 'react-native';

// Custom components
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// Context imports
import {TraineeContext} from '../../store/TraineeContext';
import {EventsContext} from './../../store/EventsContext';

// Constants
import Colors from '../../Constants/Colors';

// RegisteredEvents component
const RegisteredEvents = () => {
	// Context initialize
	const [traineeContext, eventsContext] = [
		useContext(TraineeContext),
		useContext(EventsContext),
	];

	if (
		traineeContext.registeredEvents.length === 0 ||
		!traineeContext.registeredEvents
	) {
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>
					Hurry up and register for upcoming events!
				</Text>
			</View>
		);
	}

	const ids = traineeContext.registeredEvents;
	const events = eventsContext.events.filter(e => ids.includes(e._id));

	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>
				View and manage your registered events
			</Text>
			<EventsList events={events} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingTop: '5%',
		paddingBottom: '15%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
		color: Colors.Texts.primary,
	},
});

export default RegisteredEvents;
