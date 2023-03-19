// Hooks imports
import { useContext, useLayoutEffect, useEffect, useState } from 'react';

// RN core components & API imports
import { View, Text, StyleSheet, Linking } from 'react-native';

// Custom components imports
import Header from '../../Components/Header';
// import TrainerImage from '../../Components/EventsOutput/TrainerImage';
import Title from './../../Components/Title';
// import Link from '../../Components/Link';
import Aboutme from '../../Components/TrainerProfileOutput/Aboutme';

// Context imports
import { Context } from './../../store/Context';

// Constants
import Colors from '../../Constants/Colors';
// import MyUpcomingEvents from '../../Components/TrainerProfileOutput/MyUpcomingEvents';

// Utils
import { fetchData } from '../../utils/http';

// TrainerProfile component
const TrainerProfile = ({ route, navigation }) => {
	// Loading indicator state
	const [isFetching, setIsFetching] = useState(false);

	// Initialize our context
	const context = useContext(Context);

	// accesing trainer id
	const trainerId = route.params.trainerId;

	// Http request to get the trainer details ...
	useEffect(() => {
		async function getTrainer() {
			setIsFetching(true);
			try {
				const response = await fetchData(`trainers/${trainerId}`);
				context.setTrainer(response.data);
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
		return <Text>TrainerProfile</Text>;
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
