// RN core components & API imports
import { View, StyleSheet, Image } from 'react-native';

// EventItemImage component
const TrainerImage = ({ imageUrl, style }) => {
	return (
		<View>
			<Image source={imageUrl} style={[styles.image, style]} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		marginRight: 20,
		marginLeft: 5,
		marginVertical: 5,
		height: 100,
		width: 100,
		borderRadius: 80,
	},
});

export default TrainerImage;
