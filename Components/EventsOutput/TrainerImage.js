// RN core components & API imports
import { View, StyleSheet, Image } from 'react-native';

// TrainerImage component
const TrainerImage = ({ imageUrl, style }) => (
	<View style={styles.container}>
		<View style={styles.imageContainer}>
			<Image source={imageUrl} style={[styles.image, style]} />
		</View>
	</View>
);

// TrainerImage StyleSheet
const styles = StyleSheet.create({
	container: {
		marginRight: 20,
		marginLeft: 5,
		marginVertical: 5,
	},
	imageContainer: {
		width: 100,
		height: 100,
		borderRadius: 80,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
});

export default TrainerImage;
