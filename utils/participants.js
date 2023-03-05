import Colors from '../Constants/Colors';

export const displayParticipants = (numOfTrainees, maxNumOfTrainees) =>
	`${numOfTrainees}/${maxNumOfTrainees} Participants`;

export const statusColor = (numOfTrainees, maxNumOfTrainees) => {
	const registrationRatio = numOfTrainees / maxNumOfTrainees;
	return registrationRatio < 0.5
		? Colors.Texts.available
		: registrationRatio < 0.75
		? Colors.Texts.intermediate
		: Colors.Texts.almostFull;
};
