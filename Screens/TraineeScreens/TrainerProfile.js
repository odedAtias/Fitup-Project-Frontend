// Hooks imports
import { useContext } from 'react';
// RN Core components
import { View, Text } from 'react-native';
// Context imports
import { Context } from './../../store/Context';

const TrainerProfile = ({ navigation, route }) => {
	const context = useContext(Context);
	// Http request to get the trainer details ...
	const TRAINER = {
		id: route.params.trainerId,
		name: 'Dan Cohen',
		events: context.events.filter(e => e.trainerId === route.params.trainerId),
		imageUrl: context.events.find(e => e.trainerId === route.params.trainerId)
			.imageUrl,
	};

	// Http request to Trainers Database
	return (
		<View>
			<Text>TrainerProfile</Text>
		</View>
	);
};

export default TrainerProfile;
