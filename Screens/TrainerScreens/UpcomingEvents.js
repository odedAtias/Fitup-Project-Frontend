// Hooks imports
import {useContext} from 'react';

// RN core components & API imporדts
import {StyleSheet, Text, View} from 'react-native';

// Constants
import Colors from './../../Constants/Colors';

// Contexts imports
import {TrainerContext} from './../../store/TrainerContext';

// UpcomingEvents
const UpcomingEvents = () => {
	const context = useContext(TrainerContext);
	if (context.events.length === 0)
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
					View and manage your posted events training events
				</Text>
				{/* <EventsList events={context.events} /> */}
			</View>
		);
};

// UpcomingEvents StyleSheet
const styles = StyleSheet.create({
	container: {
		height: '90%',
		justifyContent: 'center',
		paddingVertical: 20,
		alignItems: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
		color: Colors.Texts.primary,
		maxWidth: '95%',
	},
});

export default UpcomingEvents;
