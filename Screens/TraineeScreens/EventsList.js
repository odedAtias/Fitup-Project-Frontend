// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, Text } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';

// EventsList component
const EventsList = ({ navigation, route }) => {
	// Loading the dynamic screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<Header
					label={route.params.categoryName}
					containerStyle={{ paddingVertical: 30 }}
					labelStyle={{ color: 'white', fontSize: 40 }}
				/>
			),
			headerTintColor: 'white',
		});
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
