// Hooks imports
import {useState} from 'react';

// RN core components & API imports
import {View, StyleSheet, Image} from 'react-native';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

// TrainerImage component
const TrainerImage = ({imageUrl, style}) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<View style={styles.container}>
			<View style={[styles.imageContainer, style]}>
				<Image
					source={{
						uri: imageUrl && !imageError ? imageUrl : DEFAULT_IMAGE_URL,
					}}
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
