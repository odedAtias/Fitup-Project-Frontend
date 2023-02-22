// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, Text } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';
import Symbol from '../../Components/Symbol';
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
	return <Text></Text>;
};

export default EventsList;
