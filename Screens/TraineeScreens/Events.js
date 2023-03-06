// Hooks components
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, StyleSheet, Platform } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';
import EventsList from '../../Components/EventsOutput/EventsList';
// Constants
import Colors from '../../Constants/Colors';

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
			hour: '17:00',
			address: 'Hatnofa 18',
			city: 'Jerusalem',
			numOfTrainees: 17,
			maxNumOfTrainees: 20,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. ',
		},
		{
			id: 'e2',
			category: 'TRX',
			trainerName: 'Dan cohen',
			date: '20/05/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e3',
			category: 'Yoga',
			trainerName: 'Max shultz',
			date: '19/05/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e4',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '11/07/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e5',
			category: 'TRX',
			trainerName: 'Dan cohen',
			date: '10/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e6',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '15/06/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e7',
			category: 'Yoga',
			trainerName: 'Dan cohen',
			date: '19/09/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e8',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '06/02/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e9',
			category: 'TRX',
			trainerName: 'Max shultz',
			date: '07/01/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e10',
			category: 'Strengh',
			trainerName: 'Dan cohen',
			date: '19/11/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e11',
			category: 'Spining',
			trainerName: 'Max shultz',
			date: '14/12/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer1.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e12',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e13',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e14',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e15',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e16',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e17',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e18',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e19',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e20',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e21',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
		{
			id: 'e22',
			category: 'Dumbels',
			trainerName: 'Dan cohen',
			date: '23/10/23',
			hour: '17:00',
			address: 'Hatnofa 18 ',
			city: 'Jerusalem',
			numOfTrainees: 13,
			maxNumOfTrainees: 15,
			imageUrl: require('../../Images/Trainers/trainer2.png'),
			description:
				'A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.A training event is a focused and interactive learning experience led by a subject matter expert. It aims to improve participants skills, knowledge, and performance through structured content delivery, hands-on activities, and practical exercises.',
		},
	];

	// Loading the dynamic screen options
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
					onPress={() => navigation.goBack()}
					iconColor={Colors.Texts.secondary}
				/>
			),
		});
	});
	return (
		<View style={styles.container}>
			<EventsList
				events={EVENTS.filter(e => e.category === route.params.categoryName)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: '12%',
	},
});

export default Events;
