// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {Pressable, StyleSheet} from 'react-native';

// Custom components imports
import TrainerImage from './TrainerImage';
import EventItemDetails from './EventItemDetails';

// Constants
import Colors from '../../../Constants/Colors';

// Contexts imports
import {TraineeContext} from '../../../store/TraineeContext';

// EventItem component
const EventItem = ({event, onPress}) => {
	const tcx = useContext(TraineeContext);

	const isFavoriteTrainer = tcx.favoriteTrainers.some(
		trainer => trainer._id === event.trainer._id
	);

	const {_id, category, __v, ...rest} = event;

	return (
		<Pressable
			style={
				isFavoriteTrainer
					? [styles.container, {backgroundColor: Colors.Texts.third}]
					: styles.container
			}
			onPress={onPress}
		>
			{/* Events trainer image container */}
			<TrainerImage imageUrl={rest.trainer.image} />
			{/* Events details container */}
			<EventItemDetails {...rest} />
		</Pressable>
	);
};

// EventItem StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		padding: 10,
		// Adjust by the platforms
		marginHorizontal: '3%',
		marginBottom: '5%',
		// Shadow for android
		elevation: 10,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: Colors.Shadows.primary,
		shadowOpacity: 0.45,
		shadowOffset: {width: 4, height: 2},
		shadowRadius: 8,
		flex: 1,
	},
});

export default EventItem;
