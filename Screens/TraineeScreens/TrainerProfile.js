// Hooks imports
import { useContext, useLayoutEffect } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet, Linking } from 'react-native';

// Custom components imports
import Header from '../../Components/Header';
import TrainerImage from '../../Components/EventsOutput/TrainerImage';
import Title from './../../Components/Title';
import Link from '../../Components/Link';
import Aboutme from '../../Components/TrainerProfileOutput/Aboutme';

// Context imports
import { Context } from './../../store/Context';

// Constants
import Colors from '../../Constants/Colors';
import MyUpcomingEvents from '../../Components/TrainerProfileOutput/MyUpcomingEvents';

// TrainerProfile component
const TrainerProfile = ({ route, navigation }) => {
	// Initialize our context
	const context = useContext(Context);

	// accesing trainer id
	const trainerId = route.params.trainerId;

	// Http request to get the trainer details ...
	const TRAINER = {
		id: trainerId,
		name: context.events.find(e => e.trainerId === trainerId).trainerName,
		events: context.events.filter(e => e.trainerId === trainerId),
		imageUrl: context.events.find(e => e.trainerId === trainerId).imageUrl,
		email: 'MaxShultz@gmail.com',
		description:
			'I have been a kickboxing coach for over 15 years, experienced in training all populations of all ages. I am passionate about seeing people who undergo change following my training.',
		city: 'Jerusalem',
		country: 'Israel',
		ratingAvg: 4.2,
	};

	// handle contact me
	const handleSendEmail = () => {
		Linking.openURL(`mailto:${TRAINER.email}`);
	};

	// Loading dynamically the screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					containerStyle={{
						backgroundColor: Colors.Headers.secondary,
						paddingHorizontal: '5%',
						paddingTop: '8%',
					}}
					onPressLeft={() => navigation.goBack()}
					rightButton='bookmark-outline'
					onPressRight={() => navigation.goBack()}
				/>
			),
		});
	});

	return (
		<View style={styles.container}>
			<View style={styles.trainerHeaderContainer}>
				<TrainerImage
					imageUrl={TRAINER.imageUrl}
					style={{
						width: 130,
						height: 130,
						borderRadius: 100,
					}}
				/>
				<Title>{TRAINER.name}</Title>
				<Text style={[styles.font, styles.rating]}>
					Rating average : {TRAINER.ratingAvg}
				</Text>
				<Link
					icon={{
						name: 'chatbox-outline',
						color: Colors.Links.primary,
						size: 20,
					}}
					onPress={handleSendEmail}>
					Contact Me
				</Link>
			</View>
			<Aboutme description={TRAINER.description} />
			<MyUpcomingEvents events={TRAINER.events} />
		</View>
	);
};

// TrainerProfile StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},
	trainerHeaderContainer: {
		alignItems: 'center',
		marginBottom: 5,
	},
	font: {
		fontFamily: 'rubik',
	},
	rating: {
		color: Colors.Texts.available,
		marginBottom: '2%',
	},
});

export default TrainerProfile;
