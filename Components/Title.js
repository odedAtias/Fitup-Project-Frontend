// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Title component
const Title = ({ children }) => (
	<View style={styles.contaner}>
		<Text style={styles.title}>{children}</Text>
	</View>
);

const styles = StyleSheet.create({
	contaner: {
		marginVertical: '2%',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25,
	},
});
export default Title;
