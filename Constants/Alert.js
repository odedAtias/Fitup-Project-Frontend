// RN core components & API imports
import { StyleSheet, LogBox, Alert } from 'react-native';

export const alert = (title, message) => {
	Alert.alert(
		title,
		message,
		[
			{
				style: 'cancel',
			},
		],
		{
			titleStyle: styles.alertTitle,
			messageStyle: styles.alertMessage,
			alertContainerStyle: styles.alertContainer,
		}
	);
};

const styles = StyleSheet.create({
	alertTitle: {
		fontFamily: 'rubik',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	alertMessage: {
		fontFamily: 'rubik',
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 20,
	},
	alertContainer: {
		backgroundColor: '#f2f2f2',
		borderRadius: 10,
		padding: 20,
	},
});
