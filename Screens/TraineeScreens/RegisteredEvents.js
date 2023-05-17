// Hooks imports
import { useContext, useEffect } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Custom components
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// Context imports
import { TraineeContext } from '../../store/TraineeContext';
import { EventsContext } from './../../store/EventsContext';

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
				<Text style={styles.headingText}>Not have registered events yet</Text>
			</View>
		);
	}

	const ids = traineeContext.registeredEvents;
	const events = eventsContext.events.filter(e => ids.includes(e._id));

	return (
		<View>
			<EventsList events={events} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '90%',
		justifyContent: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 25,
		textAlign: 'center',
		color: Colors.Texts.primary,
	},
});

export default RegisteredEvents;
