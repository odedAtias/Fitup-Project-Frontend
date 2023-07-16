// RN core components & API imports
import {View} from 'react-native';

// Constants
import Colors from '../../../Constants/Colors';

// Custom components imports
import Title from '../../UI/Title';
import TextBox from './../../UI/TextBox';
import ParticipantsList from './ParticipantsList';

// EventParticipants component
const EventParticipants = ({participants, trainerSide}) => {
	let children = <ParticipantsList participants={participants} />;

	if (participants.length === 0) {
		children = (
			<TextBox
				bgColor={Colors.Backgrounds.primary}
				txtColor={Colors.Texts.primary}
				containerStyle={{marginTop: '2%'}}
			>
				{trainerSide
					? 'The training is currently open for registration, we look forward to welcoming participants as none have registered yet.'
					: 'Be the first person to participate in this event.'}
			</TextBox>
		);
	}

	return (
		<View>
			<Title>Participants</Title>
			{children}
		</View>
	);
};

export default EventParticipants;
