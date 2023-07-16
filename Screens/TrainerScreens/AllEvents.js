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
			<View style={styles.fallbackTextContainer}>
				<Text style={styles.headingText}>Not have registered events yet !</Text>
			</View>
		);
	else
		return (
			<View style={styles.container}>
				<EventsList events={context.events} />
			</View>
		);
};

// AllEvents component
const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	fallbackTextContainer: {
		height: '100%',
		paddingHorizontal: '5%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 20,
		color: Colors.Texts.primary,
	},
});

export default AllEvents;
