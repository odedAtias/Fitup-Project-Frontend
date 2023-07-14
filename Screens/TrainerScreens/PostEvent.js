// RN core components & API imports
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// Custom components imports
import PostEventForm from '../../Components/TrainerSide/PostEventOutput/PostEventForm';

// PostEvent StyleSheet
const PostEvent = () => {
	return (
		<ScrollView style={styles.scrolling}>
			<View style={styles.container}>
				{/* Heading */}
				<Text style={styles.headingText}>Create a New Training Event</Text>
				{/* Form */}
				<PostEventForm />
			</View>
		</ScrollView>
	);
};

// PostEvent StyleSheet
const styles = StyleSheet.create({
	scrolling: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		paddingVertical: '5%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 22,
		fontWeight: '600',
		textAlign: 'left',
		marginLeft: '5%',
		marginVertical: '5%',
	},
});

export default PostEvent;
