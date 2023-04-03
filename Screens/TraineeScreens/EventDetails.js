// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// Custom components
import EventDetailsCard from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsCard';
import EventParticipants from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';
import EventDetailsDescription from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';

// Constants
import Colors from '../../Constants/Colors';
import Link from '../../Components/UI/Link';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	// destructuring the relevant properties form params
	const { description, _id, ...cardDetails } = route.params;
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
						width: '40%',
					}}
					onPress={() => navigation.navigate('RegisterEvent')}>
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
