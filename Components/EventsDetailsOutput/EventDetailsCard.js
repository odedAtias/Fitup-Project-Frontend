// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Custom components imports
import EventItemImage from '../EventsOutput/TrainerImage';
import Link from '../Link';
import HeadingText from '../HeadingText';
import SubHeadingText from '../SubHeadingText';

// Constatns
import Colors from '../../Constants/Colors';

// Utils functions imports
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants, statusColor } from '../../utils/participants';

// EventDetailsCard component
const EventDetailsCard = cardDetails => {
	// Navigation initialize
	const navigation = useNavigation();

	// EventDetailsCard handlers
	const handleVisitProfile = () => {
		navigation.navigate('TrainerProfile', { trainerId: cardDetails.trainerId });
	};

	return (
		<View style={styles.container}>
			{/* Events trainer image container */}
			<Pressable
				onPress={handleVisitProfile}
				style={styles.visitProfileContainer}>
				<EventItemImage imageUrl={cardDetails.imageUrl} />
				<Link onPress={handleVisitProfile}>Visit Profile</Link>
			</Pressable>
			{/* Main details */}
			<View>
				<HeadingText>{cardDetails.category} Training</HeadingText>
				<SubHeadingText>{cardDetails.trainerName}</SubHeadingText>
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

// EventDetailsCard StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		padding: 10,
		// Adjust by the platforms !!!!!
		marginTop: 10,
		// Shadow for android
		elevation: 15,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: Colors.Shadows.primary,
		shadowOpacity: 0.25,
		shadowOffset: { width: 10, height: 5 },
		shadowRadius: 8,
	},
	visitProfileContainer: {
		alignItems: 'center',
		marginRight: 2,
	},
	spacing: {
		marginBottom: 3,
	},
});

export default EventDetailsCard;
