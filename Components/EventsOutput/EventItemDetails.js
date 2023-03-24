// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Custom components imports
import HeadingText from '../HeadingText';
import SubHeadingText from '../SubHeadingText';

// Utils functions imports
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants } from '../../utils/participants';
import { statusColor } from '../../utils/participants';

// EventItemDetails component
const EventItemDetails = ({
	trainer,
	address,
	city,
	date,
	hour,
	participants,
	maxParticipants,
}) => {
	const numOfTrainees = participants.length;
	const participantColor = statusColor(numOfTrainees, maxParticipants);
	return (
		<View>
			<HeadingText>{`${trainer.user.firstName} ${trainer.user.lastName}`}</HeadingText>
			<SubHeadingText>{displayAddrress(address, city)}</SubHeadingText>
			<Text style={[styles.spacing, styles.font]}>
				{displayFullDate(date, hour)}
			</Text>
			<Text style={[{ color: participantColor }, styles.font]}>
				{displayParticipants(numOfTrainees, maxParticipants)}
			</Text>
		</View>
	);
};

// EventItemDetails StyleSheet
const styles = StyleSheet.create({
	spacing: {
		marginBottom: 3,
	},
	font: {
		fontFamily: 'rubik',
	},
});

export default EventItemDetails;
