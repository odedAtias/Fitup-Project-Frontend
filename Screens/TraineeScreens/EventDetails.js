// RN core components & API imports
import { View, Text } from 'react-native';

// EventDetails component
const EventDetails = ({ navigation, route: { params } }) => {
	console.log(params);
	return (
		<View>
			<Text>EventDetails</Text>
		</View>
	);
};

export default EventDetails;
