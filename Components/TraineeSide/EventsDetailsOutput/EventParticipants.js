// RN core components & API imports
import {View, StyleSheet} from 'react-native';

// Custom components imports
import ParticipantsList from './ParticipantsList';
import Title from '../../UI/Title';

// EventParticipants component
const EventParticipants = ({participants}) => {
	return (
		<View style={styles.container}>
			<Title>Participants</Title>
			<ParticipantsList participants={participants} />
		</View>
	);
};

// EventParticipants Stylesheet
const styles = StyleSheet.create({
	container: {
		marginTop: '3%',
	},
});

export default EventParticipants;
