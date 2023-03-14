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
const EventItemDetails = details => (
	<View>
		<HeadingText>{details.trainerName}</HeadingText>
		<SubHeadingText>
			{displayAddrress(details.address, details.city)}
		</SubHeadingText>
		<Text style={styles.spacing}>
			{displayFullDate(details.date, details.hour)}
		</Text>
		<Text
			style={{
				color: statusColor(details.numOfTrainees, details.maxNumOfTrainees),
			}}>
			{displayParticipants(details.numOfTrainees, details.maxNumOfTrainees)}
		</Text>
	</View>
);

// EventItemDetails StyleSheet
const styles = StyleSheet.create({
	spacing: {
		marginBottom: 3,
	},
});

export default EventItemDetails;
