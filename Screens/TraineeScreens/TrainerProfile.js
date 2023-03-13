// Hooks imports
import { useContext } from 'react';

// RN Core components
import { View, Text, StyleSheet } from 'react-native';

// Context imports
import { Context } from './../../store/Context';

// TrainerProfile component
const TrainerProfile = ({ route }) => {
	const context = useContext(Context);
	// Http request to get the trainer details ...
	const TRAINER = {
		id: route.params.trainerId,
		name: 'Max Shultz',
		events: context.events.filter(e => e.trainerId === route.params.trainerId),
		imageUrl: 31,
		email: 'MaxShultz@gmail.com',
		description:
			'I have been a kickboxing coach for over 15 years, experienced in training all populations of all ages. I am passionate about seeing people who undergo change following my training.',
		city: 'Jerusalem',
		country: 'Israel',
	};
	return (
		<View style={styles.container}>
			<Text>TrainerProfile</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrainerProfile;
