// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {FlatList, View, StyleSheet} from 'react-native';

// Custom components imports
import EventItem from './EventItem';

// Utils
export {sortedEventsByDate} from '../../../utils/Date';

// Constants
import {sortedEventsByDate} from '../../../utils/Date';

// EventsList component
const EventsList = ({events, trainerSide}) => {
	// Navigation initialize
	const navigation = useNavigation();

	// EventsList handlers
	const handlePress = event => {
		navigation.navigate(
			'EventDetails',
			trainerSide ? {...event, trainerSide: true} : {...event}
		);
	};

	const sortedEvents = sortedEventsByDate(events);

	return (
		<View style={styles.container}>
			<FlatList
				data={sortedEvents}
				keyExtractor={item => item._id}
				renderItem={itemData => (
					<EventItem
						event={{...itemData.item}}
						onPress={() => handlePress(itemData.item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: '2.5%',
		paddingBottom: '15%',
	},
});

export default EventsList;
