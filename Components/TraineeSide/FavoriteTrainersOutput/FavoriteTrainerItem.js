// Hooks imports
import { useState } from 'react';

// RN core components & API imports
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

// Constants
import Colors from '../../../Constants/Colors';

// Default image URL
const DEFAULT_IMAGE_URL =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

// FavoriteTrainerItem
const FavoriteTrainerItem = ({ _id, firstName, lastName, image }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: image && !imageError ? image : DEFAULT_IMAGE_URL,
				}}
				resizeMode='cover'
				style={styles.image}
				onError={handleImageError}
			/>
			<View style={styles.trainerInfo}>
				<Text style={styles.nameText}>{firstName + ' ' + lastName}</Text>
			</View>
			<Pressable style={styles.visitProfileButtonContainer}>
				<Text
					style={styles.visitProfileButtonText}
					onPress={() => console.log('Navigate to profile')}>
					Visit Profile
				</Text>
			</Pressable>
		</View>
	);
};

// FavoriteTrainerItem StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		marginBottom: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
	},
	image: {
		width: 80,
		borderRadius: 80,
		height: 80,
		marginBottom: 10,
	},
	nameText: {
		fontSize: 20,
		fontFamily: 'rubik',
		marginBottom: 10,
	},
	visitProfileButtonContainer: {
		backgroundColor: Colors.Buttons.third,
		paddingHorizontal: '7%',
		paddingVertical: '2%',
	},
	visitProfileButtonText: {
		fontFamily: 'rubik',
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white',
	},
});

export default FavoriteTrainerItem;
