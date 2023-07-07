// Hooks imports
import {useState} from 'react';

// RN core components & API imports
import {View, StyleSheet, Text} from 'react-native';

// Custom components imports
import RegisterEventForm from '../../Components/TraineeSide/RegisterEventOutput/RegisterEventForm';
import Spinner2 from '../../Components/UI/Spinner2';

// RegisterEvent Component
const RegisterEvent = ({route}) => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return (
			<View style={styles.spinnerContainer}>
				<Spinner2 />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Accept our policies to register</Text>
			<RegisterEventForm
				eventId={route.params.event._id}
				setIsLoading={setIsLoading}
			/>
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
	spinnerContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginBottom: '35%',
	},
});

export default RegisterEvent;
