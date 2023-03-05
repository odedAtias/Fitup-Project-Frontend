// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';
// Constants
import Colors from '../Constants/Colors';

const Description = ({ description }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.description}>Description</Text>
			<View style={styles.descriptionContainer}>
				<Text style={styles.descriptionText}>{description}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	description: {
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: '5%',
	},
	container: {
		marginTop: '3%',
		paddingHorizontal: '5%',
	},
	descriptionContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.Backgrounds.male,
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderRadius: 15,
	},
	descriptionText: { color: 'white', fontSize: 15 },
});

export default Description;
