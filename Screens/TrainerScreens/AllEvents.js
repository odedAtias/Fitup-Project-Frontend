// Hooks imports
import {useContext} from 'react';

// RN core components & API imporדts
import {StyleSheet, Text, View} from 'react-native';

// Constants
import Colors from './../../Constants/Colors';

// Contexts imports
import {TrainerContext} from './../../store/TrainerContext';

// Custom components imports
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// AllEvents component
const AllEvents = () => {
	const context = useContext(TrainerContext);
	if (context.events.length === 0)
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>Not have registered events yet !</Text>
			</View>
		);
	else
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>
					View and manage your registered training events
				</Text>
				<EventsList events={context.events} />
			</View>
		);
};

// AllEvents component
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '10%',
	},
	headingText: {
		marginVertical: '5%',
		fontFamily: 'rubik',
		fontSize: 20,
		textAlign: 'center',
		color: Colors.Texts.primary,
		maxWidth: '90%',
	},
});

export default AllEvents;
