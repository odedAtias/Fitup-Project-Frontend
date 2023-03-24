// RN core components & API imports
import { View, StyleSheet } from 'react-native';

import EventsList from '../../Components/EventsOutput/EventsList';

// RegisteredEvents component
const RegisteredEvents = () => {
	return (
		<View>
			<EventsList events={[]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		fontSize: 40,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 24,
	},
});

export default RegisteredEvents;
