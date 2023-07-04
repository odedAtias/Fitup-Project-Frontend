// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {View, Text, StyleSheet, Pressable} from 'react-native';

// Custom components imports
import EventItemImage from '../EventsOutput/TrainerImage';
import Link from '../../UI/Link';
import HeadingText from '../../UI/HeadingText';

// Constatns
import Colors from '../../../Constants/Colors';

// Utils functions imports
import {displayAddrress} from '../../../utils/address';
import {displayFullDate} from '../../../utils/Date';
import {displayParticipants} from '../../../utils/participants';
import {statusColor} from '../../../utils/participants';

// EventDetailsCard component
const EventDetailsCard = cardDetails => {
	const navigation = useNavigation();

	// EventDetailsCard handlers
	const handleVisitProfile = () => {
		navigation.navigate('TrainerProfile', {
			trainerId: cardDetails.trainer._id,
		});
	};

	return (
		<View style={styles.container}>
			{/* Events trainer image container */}
			<Pressable
				onPress={handleVisitProfile}
				style={styles.visitProfileContainer}
			>
				<EventItemImage imageUrl={cardDetails.trainer.imageUrl} />
				<Link onPress={handleVisitProfile}>Visit Profile</Link>
			</Pressable>

			{/* Main details */}
			<View style={styles.detailsContainer}>
				<HeadingText>{cardDetails.category} Training</HeadingText>
				<Text style={styles.name}>
					{`${cardDetails.trainer.firstName} ${cardDetails.trainer.lastName}`}
				</Text>
				<Text style={[styles.spacing, styles.font]}>
					{displayAddrress(cardDetails.address, cardDetails.city)}
				</Text>
				<Text style={[styles.spacing, styles.font]}>
					Price: {cardDetails.price}₪
				</Text>
				<Text style={[styles.spacing, styles.font]}>
					{displayFullDate(cardDetails.date, cardDetails.hour)}
				</Text>
				<View>
					{/* Number of participants */}
					<Text
						style={[
							{
								color: statusColor(
									cardDetails.participants.length,
									cardDetails.maxParticipants
								),
							},
							styles.font,
						]}
					>
						{displayParticipants(
							cardDetails.participants.length,
							cardDetails.maxParticipants
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
		elevation: 30,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: Colors.Shadows.primary,
		shadowOpacity: 0.25,
		shadowOffset: {width: 10, height: 5},
		shadowRadius: 8,
	},
	detailsContainer: {
		marginLeft: 20,
	},
	visitProfileContainer: {
		alignItems: 'center',
		marginRight: 2,
	},
	spacing: {
		marginBottom: 3,
	},
	font: {
		fontFamily: 'rubik',
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
});

export default EventDetailsCard;
