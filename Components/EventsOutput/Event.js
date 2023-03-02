// RN core components & API imports
import { View, StyleSheet, Text, Image } from 'react-native';

// Event component
const Event = ({ event }) => {
	return (
		// Main container
		<View style={styles.container}>
			{/* Events trainer image container */}
			<View>
				<Image source={event.imageUrl} style={styles.image} />
			</View>
			{/* Events details container */}
			<View>
				<Text>{event.trainerName}</Text>
				<Text>{event.address}</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ marginRight: 10 }}>{event.date}</Text>
					<Text>{event.hour}</Text>
				</View>
				<Text>{`${event.numOfTrainees}/${event.maxNumOfTrainees} Collaborators`}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 20,
	},
	// Todo : check the images in defferent devices
	image: {
		marginRight: 20,
		marginLeft: 5,
		height: 100,
		width: 100,
		borderRadius: 80,
	},
});

export default Event;
