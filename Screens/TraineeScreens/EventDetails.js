// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, View, Text } from 'react-native';

// Custom components
import EventDetailsCard from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsCard';
import EventParticipants from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';
import EventDetailsDescription from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsDescription';

// Contexts imports
import { TraineeContext } from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';
import Link from '../../Components/UI/Link';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	// destructuring the relevant properties form params
	const { description, _id, ...cardDetails } = route.params;

	// context initialize
	const context = useContext(TraineeContext);
	console.log();
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
				{/* Only if have place to register */}
				{cardDetails.participants.some(p => p._id === context.trainee._id) ? (
					<Text style={styles.registeredText}>
						You are registered for this training
					</Text>
				) : (
					<Link
						style={{
							fontSize: 20,
							textAlign: 'center',
							borderBottomColor: Colors.Links.primary,
							borderBottomWidth: 1,
							width: '40%',
						}}
						onPress={() =>
							navigation.navigate('RegisterEvent', { event: route.params })
						}>
						Register now
					</Link>
				)}
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
	registeredText: {
		marginTop: '5%',
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'rubik',
		color: Colors.Texts.sixth,
		maxWidth: 320,
	},
});

export default EventDetails;
