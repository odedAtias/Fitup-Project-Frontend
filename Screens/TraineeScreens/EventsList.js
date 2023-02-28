// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, Text } from 'react-native';
// Custom components imports

// EventsList component
const EventsList = ({ navigation, route }) => {
	// Loading the dynamic screen options
	useLayoutEffect(() => {
		navigation.setOptions({});
	});
	return (
		<View>
			{/* Filter Nav bar */}
			<View>
				<Text style={{ textAlign: 'center' }}>Drop down list</Text>
			</View>
			{/* List of events */}
			<View>
				<Text>List of events (list of Pressables)</Text>
			</View>
		</View>
	);
};

export default EventsList;
