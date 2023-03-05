// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Utils functions imports
import { displayAddrress } from '../../utils/address';
import { displayFullDate } from '../../utils/Date';
import { displayParticipants } from '../../utils/participants';

// Constants
import Colors from '../../Constants/Colors';

// EventItemDetails component
const EventItemDetails = ({
	trainerName,
	date,
	hour,
	address,
	city,
	numOfTrainees,
	maxNumOfTrainees,
}) => {
	const registrationStatus = numOfTrainees / maxNumOfTrainees;
	const registrationStatusStyle = {
		color:
			registrationStatus < 0.5
				? Colors.Texts.available
				: registrationStatus < 0.75
				? Colors.Texts.intermediate
				: Colors.Texts.almostFull,
	};
	return (
		<View>
			<Text style={styles.headingText}>{trainerName}</Text>
			<Text style={[styles.littleBold, styles.spacing]}>
				{displayAddrress(address, city)}
			</Text>
			<Text style={styles.spacing}>{displayFullDate(date, hour)}</Text>
			<Text style={registrationStatusStyle}>
				{displayParticipants(numOfTrainees, maxNumOfTrainees)}
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
