import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-600x600.png';

// TrainerImage component
const TrainerImage = ({ imageUrl, style }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<View style={styles.container}>
			<View style={[styles.imageContainer, style]}>
				<Image
					source={{ uri: imageError ? DEFAULT_IMAGE_URL : imageUrl }}
					style={styles.image}
					onError={handleImageError}
				/>
			</View>
		</View>
	);
};

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
