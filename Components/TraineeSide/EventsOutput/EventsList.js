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
const EventsList = ({events}) => {
	// Navigation initialize
	const navigation = useNavigation();

	// EventsList handlers
	const handlePress = event => {
		navigation.navigate('EventDetails', {...event});
	};

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
});

export default EventsList;
