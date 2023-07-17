// RN core components & API imporדts
import {StyleSheet, Text, Pressable, ImageBackground} from 'react-native';

// Card component
const Card = ({title, image, onPress, containerStyle, contentStyle}) => {
	return (
		<Pressable onPress={onPress} style={[styles.container, containerStyle]}>
			<ImageBackground source={image} style={styles.image}>
				<Text style={[styles.title, contentStyle]}>{title}</Text>
			</ImageBackground>
		</Pressable>
	);
};

// Card StyleSheet
const styles = StyleSheet.create({
	container: {
		height: 190,
		width: 220,
		marginTop: 20,
		marginRight: 20,
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'blanka',
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		zIndex: 1,
	},
});

export default Card;
