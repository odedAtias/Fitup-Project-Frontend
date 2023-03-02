// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';
import EventsList from '../../Components/EventsOutput/EventsList';

// EventsList component
const Events = ({ navigation, route }) => {
	// Dummy Events
	const EVENTS = [
		{
			id: 'e1',
			category: 'Zoomba',
			trainerName: 'Or Dayani',
			date: '19/02/26',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st, studio mati, Jerusalem',
			numOfTrainees: 17,
			maxNumOfTrainees: 20,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e2',
			category: 'TRX',
			trainerName: 'Oded Atias',
			date: '19/02/26',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st, Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
	];
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
			<EventsList events={EVENTS} />
		</View>
	);
};

export default Events;
