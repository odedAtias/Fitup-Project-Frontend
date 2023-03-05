// RN core components & API imports
import { View, StyleSheet, Image } from 'react-native';

// EventItemImage component
const EventItemImage = ({ imageUrl }) => {
	return (
		<View>
			<Image source={imageUrl} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		marginRight: 20,
		marginLeft: 5,
		height: 100,
		width: 100,
		borderRadius: 80,
	},
});

export default EventItemImage;
