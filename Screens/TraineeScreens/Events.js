// Hooks components
import { useLayoutEffect, useContext, useEffect, useState } from 'react';

// Contexts imports
import { Context } from '../../store/Context';

// RN core components & API imports
import { View, StyleSheet, Platform, Text } from 'react-native';

// Custom components imports
import Header from '../../Components/Header';
import EventsList from '../../Components/EventsOutput/EventsList';

// Constants
import Colors from '../../Constants/Colors';

// Utils
import { fetchEvents } from '../../utils/http';

// Events component
const Events = ({ navigation, route }) => {
	// Dummy Events
	const EVENTS = [
		{
			id: 'e1',
			category: 'Zumba',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '19/02/23',
			hour: '17:00',
			address: 'Hatnofa 18',
			city: 'Jerusalem',
			numOfTrainees: 17,
			maxNumOfTrainees: 20,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e2',
			category: 'TRX',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '20/05/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e3',
			category: 'Yoga',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '19/05/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e4',
			category: 'TRX',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '11/07/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e5',
			category: 'TRX',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '10/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e6',
			category: 'TRX',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '15/06/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e7',
			category: 'Yoga',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '19/09/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e8',
			category: 'TRX',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '06/02/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e9',
			category: 'TRX',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '07/01/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e10',
			category: 'Strengh',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '19/11/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e11',
			category: 'Spining',
			trainerId: 't2',
			trainerName: 'Max shultz',
			date: '14/12/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e12',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e13',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e14',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e15',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e16',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e17',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e18',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e19',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e20',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e21',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
		{
			id: 'e22',
			category: 'Dumbels',
			trainerId: 't1',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'The "dumbbells" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
		},
	];

	// loading indicator
	const [isFetching, setIsFetching] = useState(true);

	// Context initialize
	const context = useContext(Context);

	// Loading dynamically the screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					label={route.params.categoryName}
					containerStyle={{
						backgroundColor: Colors.Headers.primary,
						paddingTop: Platform.OS === 'android' ? '15%' : '7%',
						paddingBottom: Platform.OS === 'android' ? '10%' : '7%',
						paddingHorizontal: 10,
					}}
					labelStyle={{
						fontSize: 40,
						color: Colors.Texts.secondary,
					}}
					onPressLeft={() => navigation.goBack()}
					iconsColor={Colors.Texts.secondary}
				/>
			),
		});
	});

	// Loading the Events to our store
	useEffect(() => {
		async function getEvents() {
			setIsFetching(true);
			try {
				const events = await fetchEvents();
				context.setEvents(events.data);
			} catch (error) {
				console.log(error.message);
			}
			setIsFetching(false);
		}
		getEvents();
	}, []);

	if (!isFetching) {
		return (
			<View style={styles.container}>
				<EventsList
					events={context.events.filter(
						e => e.category === route.params.categoryName
					)}
				/>
			</View>
		);
	}
};

// Events StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingBottom: '12%',
	},
});

export default Events;
