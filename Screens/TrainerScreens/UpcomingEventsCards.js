// Hooks imports
import {useContext} from 'react';

// RN core components & API imporדts
import {StyleSheet, Text, View} from 'react-native';

// Custom components import
import EventsList from './../../Components/TraineeSide/EventsOutput/EventsList';

// Constants
import Colors from './../../Constants/Colors';

// Contexts imports
import {TrainerContext} from './../../store/TrainerContext';

// Utils
import {isWithinNext7Days} from '../../utils/Date';

// UpcomingEventsCards
const UpcomingEventsCards = () => {
	const context = useContext(TrainerContext);
	const {events} = context;
	const recentEvents = events.filter(event => isWithinNext7Days(event.date));

	if (recentEvents.length === 0)
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>
					You haven't posted any traning events yet, Share your unwritten events
					with us.
				</Text>
			</View>
		);
	else
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>
					View your upcoming training events withing the next 7 days
				</Text>
				<EventsList events={recentEvents} trainerSide />
			</View>
		);
};

// UpcomingEventsCards StyleSheet
const styles = StyleSheet.create({
	container: {
		height: '90%',
		justifyContent: 'center',
		paddingVertical: 20,
		alignItems: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
		color: Colors.Texts.primary,
		maxWidth: '95%',
	},
});

export default UpcomingEventsCards;
