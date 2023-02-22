// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, Text } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';
// Constants
import Colors from '../../Constants/Colors';

// EventsList component
const EventsList = ({ navigation, route }) => {
	// Loading the dynamic screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					label={route.params.categoryName}
					labelStyle={{ color: Colors.Texts.secondary }}
					containerStyle={{ paddingTop: '15%', paddingBottom: '10%' }}
				/>
			),
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
