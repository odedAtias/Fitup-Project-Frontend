// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';
// Contatns
import Colors from '../Constants/Colors';

// Header component
const Header = ({ label, containerStyle, labelStyle }) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={[styles.label, labelStyle]}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: '5%',
		backgroundColor: Colors.Headers.primary,
	},
	label: {
		fontFamily: 'blanka',
		fontSize: 60,
		textAlign: 'center',
	},
});

export default Header;
