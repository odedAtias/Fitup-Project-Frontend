// RN core components & API imports
import { View } from 'react-native';

// Custom components
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// RegisteredEvents component
const RegisteredEvents = () => {
	return (
		<View>
			<EventsList events={[]} />
		</View>
	);
};

export default RegisteredEvents;
