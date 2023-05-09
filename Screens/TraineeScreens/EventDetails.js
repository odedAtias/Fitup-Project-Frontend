// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, View, Alert } from 'react-native';

// Custom components
import EventDetailsCard from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsCard';
import EventParticipants from '../../Components/TraineeSide/EventsDetailsOutput/EventParticipants';
import EventDetailsDescription from '../../Components/TraineeSide/EventsDetailsOutput/EventDetailsDescription';
import Link from '../../Components/UI/Link';

// Contexts imports
import { TraineeContext } from '../../store/TraineeContext';

// Constants
import Colors from '../../Constants/Colors';
import { alert } from '../../Constants/Alert';

// Utils
import { updateData } from '../../utils/http/rest';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	// destructuring the relevant properties form params
	const { description, _id, ...cardDetails } = route.params;

	// context initialize
	const context = useContext(TraineeContext);

	// EventDetails handlers
	const cancelRegistration = async () => {
		console.log('cancel registration ...');
		alert(
			'Cancelation Successful!',
			'Your registration for the sport training event has been successfully canceled.'
		);
	};

	const handleCancelRegistration = () => {
		Alert.alert(
			'Cancel Registration',
			'Are you sure you want to cancel your registration for this sport training event?',
			[
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: cancelRegistration,
					style: 'destructive',
				},
			],
			{ cancelable: false }
		);
	};

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
					<Link
						style={{
							fontSize: 20,
							textAlign: 'center',
							borderBottomColor: Colors.Links.primary,
							borderBottomWidth: 1,
							width: '40%',
						}}
						onPress={handleCancelRegistration}>
						Cancel registration
					</Link>
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
});

export default EventDetails;
