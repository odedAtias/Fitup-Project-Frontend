// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// Custom components imports
import EventDetailsCard from '../../Components/EventsDetailsOutput/EventDetailsCard';
import EventDetailsDescription from '../../Components/EventsDetailsOutput/EventDetailsDescription';
import EventParticipants from './../../Components/EventsDetailsOutput/EventParticipants';

// Constants
import Colors from '../../Constants/Colors';
import Link from '../../Components/Link';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	// destructuring the relevant properties form params
	const { description, id, ...cardDetails } = route.params;
	return (
		<View style={styles.container}>
			<EventDetailsCard {...cardDetails} />
			<EventDetailsDescription description={description} />
			<EventParticipants />
			<View
				style={{
					margin: 20,
					alignItems: 'center',
				}}>
				<Link
					style={{
						fontSize: 20,
						textAlign: 'center',
						borderBottomColor: Colors.Links.primary,
						borderBottomWidth: 1,
						width: '45%',
					}}
					onPress={() => navigation.navigate('RegisterEventForm')}>
					Register now
				</Link>
			</View>
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

//Don't miss out this opportunity - Register now !
