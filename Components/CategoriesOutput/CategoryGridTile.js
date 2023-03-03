// RN core components & API imports
import {
	View,
	Pressable,
	ImageBackground,
	Text,
	StyleSheet,
} from 'react-native';

// Category component
const CategoryGridTile = ({ categoryName, categoryImageUrl, handlePress }) => {
	return (
		<View style={styles.container}>
			<Pressable
				onPress={handlePress}
				style={({ pressed }) => [
					styles.innerContainer,
					pressed && styles.buttonPressed,
				]}>
				{/* Category item image */}
				<ImageBackground source={categoryImageUrl} style={styles.image}>
					<Text style={styles.text}>{categoryName}</Text>
				</ImageBackground>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		marginTop: 0,
		height: 140,
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
