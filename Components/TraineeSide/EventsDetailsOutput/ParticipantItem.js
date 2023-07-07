// RN core components & API imports
import {View, Text, StyleSheet, Image} from 'react-native';

// ParticipantItem component
const ParticipantItem = ({participant}) => {
	const DEFAULT_IMAGE_URL =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTECb7TBZ1o0RLkM-VV-41JPLLMwKwPRgACKvj89wueS9AqoK-mieFUvl1whh1G7ODWQ&usqp=CAU';

	const image = participant.image ? participant.image : DEFAULT_IMAGE_URL;
	return (
		<View style={styles.container}>
			<Image source={{uri: image}} style={styles.participantImage} />
			<Text style={styles.participantName}>{participant.firstName}</Text>
		</View>
	);
};

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
		fontWeight: '600',
		fontSize: 14,
		fontFamily: 'rubik',
	},
});

export default ParticipantItem;
