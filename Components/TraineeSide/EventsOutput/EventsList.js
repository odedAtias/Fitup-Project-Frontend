// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {FlatList} from 'react-native';

// Custom components imports
import EventItem from './EventItem';

// EventsList component
const EventsList = ({events}) => {
	// Navigation initialize
	const navigation = useNavigation();

	// EventsList handlers
	const handlePress = event => {
		navigation.navigate('EventDetails', {...event});
	};

	return (
		<FlatList
			data={events}
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

export default EventsList;

// {event, trainerName}
//
