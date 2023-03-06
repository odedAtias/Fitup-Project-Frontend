// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';
// Custom component imports
import EventItemImage from '../EventsOutput/EventItemImage';
// Constatns
import Colors from '../../Constants/Colors';
// Utills
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants, statusColor } from '../../utils/participants';

const EventDetailsCard = cardDetails => {
	return (
		<View style={styles.container}>
			{/* Events trainer image container */}
			<EventItemImage imageUrl={cardDetails.imageUrl} />
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
