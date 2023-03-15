// RN core components & API imports
import { Pressable, StyleSheet } from 'react-native';

// Custom components imports
import TrainerImage from './TrainerImage';
import EventItemDetails from './EventItemDetails';

// Constants
import Colors from '../../Constants/Colors';

// EventItem component
const EventItem = ({ event, onPress }) => {
	const { id, category, imageUrl, ...eventDetails } = event;
	return (
		<Pressable style={styles.container} onPress={onPress}>
			{/* Events trainer image container */}
			<TrainerImage imageUrl={imageUrl} />
			{/* Events details container */}
			<EventItemDetails {...eventDetails} />
		</Pressable>
	);
};

// EventItem StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.Buttons.lightGray,
		borderRadius: 10,
		padding: 10,
		// Adjust by the platforms
		marginHorizontal: 15,
		marginVertical: 10,
		// Shadow for android
		elevation: 8,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: Colors.Shadows.primary,
		shadowOpacity: 0.25,
		shadowOffset: { width: 4, height: 2 },
		shadowRadius: 8,
	},
});

export default EventItem;
