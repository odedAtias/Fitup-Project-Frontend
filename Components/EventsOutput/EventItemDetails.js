// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Utils functions imports
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants } from '../../utils/participants';
import { statusColor } from '../../utils/participants';

// EventItemDetails component
const EventItemDetails = details => {
	return (
		<View>
			<Text style={styles.headingText}>{details.trainerName}</Text>
			<Text style={[styles.littleBold, styles.spacing]}>
				{displayAddrress(details.address, details.city)}
			</Text>
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
};

const styles = StyleSheet.create({
	headingText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 2,
	},
	littleBold: {
		fontWeight: '500',
	},
	spacing: {
		marginBottom: 3,
	},
});

export default EventItemDetails;
