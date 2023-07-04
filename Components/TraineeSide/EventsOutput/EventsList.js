// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {FlatList, StyleSheet, View, Text} from 'react-native';

// Custom components imports
import EventItem from './EventItem';

// Utils
export {sortedEventsByDate} from '../../../utils/Date';

// Constants
import Colors from '../../../Constants/Colors';
import {sortedEventsByDate} from '../../../utils/Date';

// EventsList component
const EventsList = ({events, category}) => {
	// Navigation initialize
	const navigation = useNavigation();

	// EventsList handlers
	const handlePress = event => {
		navigation.navigate('EventDetails', {...event});
	};

	// If case dont have events in the relevant categories
	if (!events || events.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.headingText}>
					There are no {category} trainings in the system
				</Text>
			</View>
		);
	}
	const sortedEvents = sortedEventsByDate(events);

	return (
		<FlatList
			data={sortedEvents}
			keyExtractor={item => item._id}
			renderItem={itemData => (
				<EventItem
					event={{...itemData.item}}
					onPress={() => handlePress(itemData.item)}
				/>
			)}
		/>
	);
};

// EventsList StyleSheet
const styles = StyleSheet.create({
	container: {
		height: '90%',
		justifyContent: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 30,
		color: Colors.Texts.primary,
	},
});

export default EventsList;
