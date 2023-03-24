// Hooks imports
import { useContext, useLayoutEffect, useEffect, useState } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet, Linking } from 'react-native';

// Custom components imports
import Header from '../../Components/Header';
import TrainerImage from '../../Components/EventsOutput/TrainerImage';
import Title from './../../Components/Title';
import Link from '../../Components/Link';
import Aboutme from '../../Components/TrainerProfileOutput/Aboutme';
import MyUpcomingEvents from '../../Components/TrainerProfileOutput/MyUpcomingEvents';

// Context imports
import { TraineeContext } from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';

// Utils
import { fetchData } from '../../utils/http';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

// TrainerProfile component
const TrainerProfile = ({ route, navigation }) => {
	// Loading indicator state
	const [isFetching, setIsFetching] = useState(false);

	// Initialize our context
	const context = useContext(TraineeContext);

	// accesing trainer id
	const trainerId = route.params.trainerId;

	// handlers
	const handleSendEmail = email => {
		Linking.openURL(`mailto:${email}`);
	};

	// Http request to get the trainer details ...
	useEffect(() => {
		async function getTrainer() {
			setIsFetching(true);
			try {
				const response = await fetchData(`trainers/${trainerId}`);
				context.setTrainer({
					...response.data,
					imageUrl: !response.data.imageUrl
						? DEFAULT_IMAGE_URL
						: response.data.user.imageUrl,
				});
			} catch (error) {
				console.log(error.message);
			}
			setIsFetching(false);
		}
		getTrainer();
	}, []);

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

	if (!isFetching && context.trainer) {
		let trainer = context.trainer;
		console.log(context.trainer);
		return (
			<View style={styles.container}>
				<View style={styles.trainerHeaderContainer}>
					<TrainerImage
						imageUrl={trainer.imageUrl}
						style={{
							width: 130,
							height: 130,
							borderRadius: 100,
						}}
					/>
					<Title>{`${trainer.firstName} ${trainer.lastName}`}</Title>
					<Text style={[styles.font, styles.rating]}>
						Rating average : {trainer.rating}
					</Text>
					<Link
						icon={{
							name: 'chatbox-outline',
							color: Colors.Links.primary,
							size: 20,
						}}
						onPress={() => handleSendEmail(trainer.email)}>
						Contact Me
					</Link>
				</View>
				<Aboutme description={trainer.description} />
				<MyUpcomingEvents events={trainer.events} />
			</View>
		);
	} else {
		return <Text>Loading trainer profile ...</Text>;
	}
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
