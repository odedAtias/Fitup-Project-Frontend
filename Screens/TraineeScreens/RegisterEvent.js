// RN core components & API imports
import { View, StyleSheet, Text } from 'react-native';

// Custom components imports
import RegisterEventForm from '../../Components/RegisterEventOutput/RegisterEventForm';

// RegisterEvent Component
const RegisterEvent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Accept our policies to register</Text>
			<RegisterEventForm />
		</View>
	);
};

// RegisterEvent StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	heading: {
		fontSize: 20,
		fontWeight: '400',
		marginBottom: 20,
	},
});

export default RegisterEvent;
