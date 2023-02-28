// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

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
		justifyContent: 'center',
	},
	label: {
		fontFamily: 'blanka',
		fontSize: 50,
		textAlign: 'center',
	},
});

export default Header;
