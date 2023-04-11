// Hooks imports
import { useContext, useLayoutEffect, useEffect, useState } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet, Linking, Platform } from 'react-native';

// Custom components imports
import Header from '../../Components/UI/Header';
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import Title from '../../Components/UI/Title';
import Link from '../../Components/UI/Link';
import Aboutme from '../../Components/TraineeSide/TrainerProfileOutput/Aboutme';
import MyUpcomingEvents from '../../Components/TraineeSide/TrainerProfileOutput/MyUpcomingEvents';

// Context imports
import { TraineeContext } from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';
import { alert } from '../../Constants/Alert';

// Utils
import { fetchData, updateData } from '../../utils/http';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

// TrainerProfile component
const TrainerProfile = ({ route, navigation }) => {
	// Loading indicator state
	const [isFetching, setIsFetching] = useState(false);

	const [isFavoriteTrainer, setIsFavoriteTrainer] = useState(false);

	// Initialize our context
	const context = useContext(TraineeContext);

	// accesing trainer id
	const trainerId = route.params.trainerId;

	// TrainerProfile handlers
	const handleSendEmail = email => {
		Linking.openURL(`mailto:${email}`);
	};

	const handleFavoriteTrainer = async () => {
		setIsFavoriteTrainer(!isFavoriteTrainer);
		let favoriteTrainers = context.favoriteTrainers;
		// is this trainer is not in the favorite trainers list of the trainee
		if (!isFavoriteTrainer) {
			favoriteTrainers = [...favoriteTrainers, trainerId];
		} else {
			favoriteTrainers = favoriteTrainers.filter(tid => tid !== trainerId);
		}
		context.setFavoriteTrainers(favoriteTrainers);
		alert(
			'Favorite Trainers Updated',
			'Your favorite trainers list has been updated successfully!'
		);

		// Creating the updated user data and send to the backend
		const updatedTraineeData = {
			userId: context.trainee.userId,
			firstName: context.trainee.firstName,
			lastName: context.trainee.lastName,
			email: context.trainee.email,
			favoriteTrainers: favoriteTrainers,
			registeredEvents: context.registeredEvents,
			image: context.trainee.image,
		};

		// Remove any undefined properties
		Object.keys(updatedTraineeData).forEach(
			key =>
				updatedTraineeData[key] === undefined && delete updatedTraineeData[key]
		);

		// Update the backend
		try {
			const response = await updateData(
				`api/trainees/${context.trainee._id}`,
				updatedTraineeData
			);
			console.log(response);
		} catch (error) {}
	};

	// Http request to get the trainer details ...
	useEffect(() => {
		async function getTrainer() {
			setIsFetching(true);
			try {
				const response = await fetchData(`api/trainers/${trainerId}`);
				context.setTrainer({
					...response.data,
					imageUrl: !response.data.imageUrl
						? DEFAULT_IMAGE_URL
						: response.data.imageUrl,
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
						padding: Platform.OS === 'ios' ? 20 : 30,
						// Need to adjust the height for ios devices ...
						height: Platform.Os === 'ios' ? 100 : 0,
					}}
					onPressLeft={() => navigation.goBack()}
					rightButton={isFavoriteTrainer ? 'bookmark' : 'bookmark-outline'} // Use bookmark or bookmark-outline icon based on the value of isFavoriteTrainer
					onPressRight={handleFavoriteTrainer}
				/>
			),
		});
	}, [isFavoriteTrainer]);

	if (!isFetching && Object.keys(context.trainer).length !== 0) {
		let trainer = context.trainer;
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
		marginTop: 5,
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
