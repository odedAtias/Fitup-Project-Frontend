// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// HeadingText component
const HeadingText = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>{children}</Text>
		</View>
	);
};

export default HeadingText;

const styles = StyleSheet.create({
	container: {
		marginBottom: 2,
	},
	headingText: {
		fontSize: 22,
		fontWeight: 'bold',
	},
});
