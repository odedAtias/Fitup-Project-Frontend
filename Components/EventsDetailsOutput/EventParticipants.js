// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';
// Custom components imports
import ParticipantsList from './ParticipantsList';

// EventParticipants component
const EventParticipants = () => {
	const PARTICIPANTS = [
		{
			id: 'p1',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p2',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
		{
			id: 'p3',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p4',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
		{
			id: 'p5',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p6',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
		{
			id: 'p7',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p8',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p9',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
		{
			id: 'p10',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p11',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
		{
			id: 'p12',
			firstName: 'Oded',
			imageUrl: require('../../Images/Participants/p1.png'),
		},
		{
			id: 'p13',
			firstName: 'Or',
			imageUrl: require('../../Images/Participants/p2.png'),
		},
	];
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Participants</Text>
			<ParticipantsList participants={PARTICIPANTS} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: '3%',
	},
	headingText: {
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 10,
	},
});

export default EventParticipants;
