// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {View, Text, StyleSheet} from 'react-native';

// Custom components imports
import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';

// Utils functions imports
import {displayAddress, displayCity} from '../../../utils/address';
import {displayFullDate} from '../../../utils/Date';
import {displayParticipants} from '../../../utils/participants';
import {statusColor} from '../../../utils/participants';

// EventItemDetails component
const EventItemDetails = ({
	trainer,
	address,
	city,
	date,
	hour,
	participants,
	maxParticipants,
	price,
}) => {
	const numOfTrainees = participants.length;
	const participantColor = statusColor(numOfTrainees, maxParticipants);

	return (
		<View style={styles.container}>
			<HeadingText>{`${trainer.firstName} ${trainer.lastName}`}</HeadingText>
			<SubHeadingText>{displayAddress(address)}</SubHeadingText>
			<SubHeadingText>{city}</SubHeadingText>
			<Text style={[styles.spacing, styles.font]}>
				{displayFullDate(date, hour)}
			</Text>
			<Text style={[styles.spacing, styles.font]}>Price: {price}₪</Text>
			<Text style={[{color: participantColor}, styles.font]}>
				{displayParticipants(numOfTrainees, maxParticipants)}
			</Text>
		</View>
	);
};

// EventItemDetails StyleSheet
const styles = StyleSheet.create({
	container: {
		marginLeft: 20,
	},
	spacing: {
		marginBottom: 3,
	},
	font: {
		fontFamily: 'rubik',
	},
});

export default EventItemDetails;
