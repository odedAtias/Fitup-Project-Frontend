// RN core components & API imports
import { StyleSheet, View } from 'react-native';
// Custom components imports
import EventDetailsCard from '../../Components/EventsDetailsOutput/EventDetailsCard';
import Description from '../../Components/Description';
import EventParticipants from './../../Components/EventsDetailsOutput/EventParticipants';
// Constatns

// EventDetails component
const EventDetails = ({ route }) => {
	const { description, id, ...cardDetails } = route.params;
	return (
		<View style={styles.container}>
			<EventDetailsCard {...cardDetails} />
			<Description description={description} />
			<EventParticipants />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: Platform.OS === 'ios' ? 30 : 0,
	},
});

export default EventDetails;
