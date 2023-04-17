// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Title component
const Title = ({ children }) => (
	<View style={styles.contaner}>
		<Text style={styles.title}>{children}</Text>
	</View>
);

// Title StyleSheet
const styles = StyleSheet.create({
	contaner: {
		marginVertical: '2%',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center',
		fontFamily: 'rubik',
	},
});

export default Title;
