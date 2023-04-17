// Hooks imports
import { useContext, useEffect } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Custom components
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// Context imports
import { TraineeContext } from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';

// RegisteredEvents component
const RegisteredEvents = () => {
	const context = useContext(TraineeContext);

	if (!context.registerdEvents || context.registerdEvents.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>Not have registered events yet</Text>
			</View>
		);
	}

	const registeredEventsIds = context.registerdEvents.map(e => e._id);
	const events = context.events.filter(e =>
		registeredEventsIds.includes(e._id)
	);

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
