// Hooks imports
import { useState } from 'react';

// RN core components & API imports
import {
	View,
	Pressable,
	ImageBackground,
	Text,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';

// CategoryGridTile component
// CategoryGridTile component
const CategoryGridTile = ({ categoryName, categoryImageUrl, onPress }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);

	const handleImageLoad = () => {
		setIsLoaded(true);
	};

	const handleImageError = () => {
		setError(true);
	};

	return (
		<View style={styles.container}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					styles.innerContainer,
					pressed && styles.buttonPressed,
				]}>
				{error ? (
					<View style={styles.imageError}>
						<Text style={styles.text}>{categoryName}</Text>
					</View>
				) : (
					<ImageBackground
						source={{ uri: categoryImageUrl }}
						onLoad={handleImageLoad}
						onError={handleImageError}
						style={styles.image}>
						{!isLoaded && (
							<View style={styles.imagePlaceholder}>
								<ActivityIndicator size='large' color='white' />
							</View>
						)}
						<Text style={styles.text}>{categoryName}</Text>
					</ImageBackground>
				)}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		marginTop: 0,
		height: 150,
		width: '100%',
	},
	innerContainer: {
		flex: 1,
	},
	image: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imagePlaceholder: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageError: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
	},
	text: {
		fontSize: 24,
		color: 'white',
		fontFamily: 'blanka',
	},
	buttonPressed: {
		opacity: 0.75,
	},
});

export default CategoryGridTile;
