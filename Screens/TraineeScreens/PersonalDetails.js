// RN core components & API imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// PersonalDetails Component
const PersonalDetails = () => {
	// Dummy Information
	const DETAILS = {
		name: 'Or Dayani',
		email: 'Odayani21@gmail.com',
		city: 'Jerusalem',
		address: 'Hatnofa 18 st',
	};
	return (
		<View>
			<Text>{DETAILS.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	avatarContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 80,
	},
	name: {
		fontSize: 25,
		fontWeight: 'bold',
		marginTop: 10,
	},
	infoContainer: {
		marginTop: 20,
	},
	infoLabel: {
		fontWeight: 'bold',
	},
	infoValue: {
		marginTop: 5,
	},
	graphLabel: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default PersonalDetails;
