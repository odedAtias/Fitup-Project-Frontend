// RN core components & API imports
import { View, Text, StyleSheet, Image } from 'react-native';

// ParticipantItem component
const ParticipantItem = ({ participant }) => (
	<View style={styles.container}>
		<Image source={participant.imageUrl} style={styles.participantImage} />
		<Text style={styles.participantName}>{participant.firstName}</Text>
	</View>
);

// ParticipantItem StyleSheet
const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: 80,
	},
	participantImage: {
		height: 80,
		width: 80,
		borderRadius: 70,
	},
	participantName: {
		marginTop: 5,
		fontWeight: '500',
		fontSize: 14,
	},
});

export default ParticipantItem;
