// Hooks imports
import { useNavigation } from '@react-navigation/native';
// RN core components & API imports
import { FlatList, View } from 'react-native';
// Custom components imports
import EventItem from './EventItem';
// EventsList component
const EventsList = ({ events }) => {
	const navigation = useNavigation();
	// Event Handlers
	const handlePress = event => {
		navigation.navigate('EventDetails', { ...event });
	};
	return (
		<View>
			<FlatList
				data={events}
				keyExtractor={item => item.id}
				renderItem={itemData => (
					<EventItem
						event={{ ...itemData.item }}
						onPress={() => handlePress(itemData.item)}
					/>
				)}
			/>
		</View>
	);
};

export default EventsList;
