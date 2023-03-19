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
const EventItemDetails = details => {
	const numOfTrainees = details.participants.length;
	return (
		<View>
			<HeadingText>{details.trainer.name}</HeadingText>
			<SubHeadingText>
				{displayAddrress(details.address, details.city)}
			</SubHeadingText>
			<Text style={[styles.spacing, styles.font]}>
				{displayFullDate(details.date, details.hour)}
			</Text>
			<Text
				style={[
					{
						color: statusColor(numOfTrainees, details.maxParticipants),
					},
					styles.font,
				]}>
				{displayParticipants(numOfTrainees, details.maxParticipants)}
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
