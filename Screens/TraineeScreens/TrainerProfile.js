// Hooks imports
import {useContext, useLayoutEffect, useEffect, useState} from 'react';

// RN core components & API imports
import {View, Text, StyleSheet, Linking, Platform} from 'react-native';

// Custom components imports
import Header from '../../Components/UI/Header';
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import Title from '../../Components/UI/Title';
import Link from '../../Components/UI/Link';
import Aboutme from '../../Components/TraineeSide/TrainerProfileOutput/Aboutme';
import MyUpcomingEvents from '../../Components/TraineeSide/TrainerProfileOutput/MyUpcomingEvents';
import Spinner2 from './../../Components/UI/Spinner2';

// Context imports
import {TraineeContext} from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';
import {alert} from '../../Constants/Alert';

// Utils
import {fetchData, updateData} from '../../utils/http/rest';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

// TrainerProfile component
const TrainerProfile = ({route, navigation}) => {
	// Initialize trainer state & trainee context
	const [trainer, setTrainer] = useState(null);
	const [isFavoriteTrainer, setIsFavoriteTrainer] = useState('');
	const context = useContext(TraineeContext);
	// Getting the trainer id
	let trainerId = route.params.trainerId;

	useEffect(() => {
		const getTrainer = async () => {
			try {
				const response = await fetchData(`api/trainers/${trainerId}`);
				setTrainer({
					...response.data,
					image: response.data.image ? response.data.image : DEFAULT_IMAGE_URL,
				});
				const flag = context.favoriteTrainers.some(t => t._id === trainerId);
				setIsFavoriteTrainer(flag);
			} catch (error) {
				alert('Error fetching trainer data');
			}
		};
		getTrainer();
	}, [trainerId]);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					containerStyle={{
						backgroundColor: Colors.Backgrounds.primary,
						paddingHorizontal: '5%',
						height: Platform.OS === 'ios' ? 70 : 100,

						// Need to adjust the height for ios devices ...
					}}
					onPressLeft={() => navigation.goBack()}
					rightButton={isFavoriteTrainer ? 'bookmark' : 'bookmark-outline'}
					onPressRight={handleAddToFavorite}
				/>
			),
		});
	}, [isFavoriteTrainer]);

	// TrainerProfile handlers
	const handleSendEmail = () => {
		Linking.openURL(`mailto:${trainer.email}`);
	};

	async function handleAddToFavorite() {
		let favoriteTrainers = context.favoriteTrainers;
		// Add to favorite trainers list
		if (!isFavoriteTrainer) {
			favoriteTrainers.push(trainer);
		}
		// Remove from favorite Trainers
		else {
			let index = favoriteTrainers.findIndex(t => t._id === trainerId);
			if (index !== -1) {
				favoriteTrainers.splice(index, 1);
			}
		}
		setIsFavoriteTrainer(prev => !prev);
		context.setFavoriteTrainers(favoriteTrainers);
		const ids = favoriteTrainers.map(t => t._id);
		// Creating the updated user data and send to the backend
		const updatedTraineeData = {
			userId: context.trainee.userId,
			firstName: context.trainee.firstName,
			lastName: context.trainee.lastName,
			email: context.trainee.email,
			favoriteTrainers: ids,
			registeredEvents: context.registeredEvents,
			image: context.trainee.image,
			timeStamp: context.trainee.timeStamp,
		};
		// Remove any undefined properties
		Object.keys(updatedTraineeData).forEach(
			key =>
				updatedTraineeData[key] === undefined && delete updatedTraineeData[key]
		);
		// Update the backend
		try {
			await updateData(
				`api/trainees/${context.trainee._id}`,
				updatedTraineeData
			);
			alert(
				'Favorite Trainers Updated',
				'Your favorite trainers list has been updated successfully!',
				navigation.navigate('FavoriteTrainers')
			);
		} catch (error) {
			console.log('error occured');
			alert('Favorite Trainers Update failed', 'Error occured!');
		}
	}

	if (!trainer || trainer._id !== trainerId) {
		return (
			<View style={styles.spinnerContainer}>
				<Spinner2 />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.trainerHeaderContainer}>
				<TrainerImage
					imageUrl={trainer.image}
					style={{
						width: 130,
						height: 130,
						borderRadius: 100,
					}}
				/>
				<Title>{`${trainer.firstName} ${trainer.lastName}`}</Title>
				{/* <Text style={[styles.font, styles.rating]}>
					Rating average : {trainer.rating}
				</Text> */}
				<Link
					icon={{
						name: 'chatbox-outline',
						color: Colors.Links.primary,
						size: 20,
					}}
					onPress={() => handleSendEmail(trainer.email)}
				>
					Contact Me
				</Link>
			</View>
			<Aboutme description={trainer.description} />
			<MyUpcomingEvents events={trainer.events} />
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
	},
	font: {
		fontFamily: 'rubik',
	},
	rating: {
		color: Colors.Texts.available,
		marginBottom: '2%',
	},
	spinnerContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginBottom: '30%',
	},
});

export default TrainerProfile;
