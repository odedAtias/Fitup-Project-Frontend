// RN core components & API imports
import {View, StyleSheet} from 'react-native';

// Constants
import Colors from '../../../Constants/Colors';

// Custom components imports
import ParticipantsList from './ParticipantsList';
import Title from '../../UI/Title';
import TextBox from './../../UI/TextBox';

// EventParticipants component
const EventParticipants = ({participants}) => {
	let children = <ParticipantsList participants={participants} />;
	if (participants.length === 0)
		children = (
			<TextBox
				bgColor={Colors.Backgrounds.primary}
				txtColor={Colors.Texts.primary}
			>
				Be the first person to participate in this event.
			</TextBox>
		);

	return (
		<View style={styles.container}>
			<Title>Participants</Title>
			{children}
		</View>
	);
};

// EventParticipants Stylesheet
const styles = StyleSheet.create({
	container: {
		marginTop: '3%',
	},
});

export default EventParticipants;
