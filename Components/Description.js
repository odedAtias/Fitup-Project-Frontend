// RN core components & API imports
import { ScrollView, View, Text, StyleSheet } from 'react-native';
// Constants
import Colors from '../Constants/Colors';

const Description = ({ description }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Description</Text>
			<View style={styles.scrollContainer}>
				<ScrollView contentContainerStyle={styles.ScrollContent}>
					<Text style={styles.text}>{description}</Text>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: '2%',
	},
	headingText: {
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: '2%',
	},
	scrollContainer: {
		padding: '5%',
		backgroundColor: Colors.Backgrounds.male,
		maxHeight: 130,
		borderRadius: 10,
	},
	scrollContent: {
		color: 'white',
		fontSize: 16,
	},
	text: { color: 'white', fontSize: 15 },
});

export default Description;
