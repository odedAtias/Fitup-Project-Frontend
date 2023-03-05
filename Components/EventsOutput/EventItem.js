// RN core components & API imports
import { Pressable, StyleSheet } from 'react-native';
// Custom components imports
import EventItemImage from './EventItemImage';
import EventItemDetails from './EventItemDetails';
// Constants
import Colors from '../../Constants/Colors';

// Event component
const EventItem = ({ event }) => {
	const { id, category, imageUrl, ...eventDetails } = event;
	return (
		// Main container
		<Pressable
			style={styles.container}
			onPress={() => {
				console.log('event pressed');
			}}>
			{/* Events trainer image container */}
			<EventItemImage imageUrl={imageUrl} />
			{/* Events details container */}
			<EventItemDetails {...eventDetails} />
		</Pressable>
	);
};

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
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
});

export default EventItem;
