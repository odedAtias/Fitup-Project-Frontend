// Hooks imports
import { useNavigation } from '@react-navigation/native';
// RN core components & API imports
import { View, Text, StyleSheet, Pressable } from 'react-native';
// Custom component imports
import EventItemImage from '../EventsOutput/TrainerImage';
import Link from '../Link';
// Constatns
import Colors from '../../Constants/Colors';
// Utills
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants, statusColor } from '../../utils/participants';

const EventDetailsCard = cardDetails => {
	// Navigation
	const navigation = useNavigation();
	// EventDetailsCard handlers
	const handleVisitProfile = () => {
		navigation.navigate('TrainerProfile', { trainerId: cardDetails.trainerId });
	};
	return (
		<View style={styles.container}>
			{/* Events trainer image container */}
			<Pressable onPress={handleVisitProfile}>
				<EventItemImage imageUrl={cardDetails.imageUrl} />
				<Link onPress={handleVisitProfile} style={{ textAlign: 'center' }}>
					Visit Profile
				</Link>
			</Pressable>
			{/* Main details */}
			<View>
				<Text style={styles.headingText}>{cardDetails.category} training</Text>
				<Text style={[styles.littleBold, styles.subHeadingText]}>
					{cardDetails.trainerName}
				</Text>
				<Text style={styles.spacing}>
					{displayAddrress(cardDetails.address, cardDetails.city)}
				</Text>
				<Text style={styles.spacing}>
					{displayFullDate(cardDetails.date, cardDetails.hour)}
				</Text>
				<View>
					{/* Number of participants */}
					<Text
						style={{
							color: statusColor(
								cardDetails.numOfTrainees,
								cardDetails.maxNumOfTrainees
							),
						}}>
						{displayParticipants(
							cardDetails.numOfTrainees,
							cardDetails.maxNumOfTrainees
						)}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		padding: 10,
		// Adjust by the platforms !!!!!
		marginTop: 10,
		// Shadow for android
		elevation: 8,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: Colors.Backgrounds.male,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	headingText: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 2,
	},
	subHeadingText: {
		fontSize: 18,
		fontWeight: '500',
	},
	littleBold: {
		fontWeight: '500',
	},
	spacing: {
		marginBottom: 3,
	},
});

export default EventDetailsCard;
