// RN core components & API imports
import { FlatList, StyleSheet, View } from 'react-native';
// Custom components imports
import Event from './Event';
// EventsList component
const EventsList = ({ events }) => {
	return (
		<View>
			<FlatList
				data={events}
				keyExtractor={item => item.id}
				renderItem={itemData => <Event event={{ ...itemData.item }} />}
			/>
		</View>
	);
};

export default EventsList;
