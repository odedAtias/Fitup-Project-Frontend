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
		// Todo - instead put the trainer name in string we need to get the trainer name from the object trainer
		{
			id: 'e1',
			category: 'Zumba',
			trainerName: 'Dan cohen',
			date: '19/02/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 17,
			maxNumOfTrainees: 20,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e2',
			category: 'TRX',
			trainerName: 'Dan cohen',
			date: '20/05/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
		{
			id: 'e3',
			category: 'Yoga',
			trainerName: 'Max shultz',
			date: '19/05/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e4',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '11/07/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
		{
			id: 'e5',
			category: 'TRX',
			trainerName: 'Dan cohen',
			date: '10/10/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e6',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '15/06/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e7',
			category: 'Yoga',
			trainerName: 'Dan cohen',
			date: '19/09/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
		{
			id: 'e8',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '06/02/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
		{
			id: 'e9',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '07/01/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e10',
			category: 'Strengh',
			trainerName: 'Dan cohen',
			date: '19/11/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
		},
		{
			id: 'e11',
			category: 'Spining',
			trainerName: 'Max shultz',
			date: '14/12/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
		},
		{
			id: 'e12',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00 pm',
			address: 'Hatnofa 18 st',
			city: 'Jerusalem',
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
			<EventsList
				events={EVENTS.filter(e => e.category === route.params.categoryName)}
			/>
		</View>
	);
};

export default Events;
