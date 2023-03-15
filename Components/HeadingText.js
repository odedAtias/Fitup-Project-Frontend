// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Custom component imports
import RubikText from './RubikText';

// HeadingText component
const HeadingText = ({ children }) => {
	return (
		<View style={styles.container}>
			<RubikText style={styles.headingText}>{children}</RubikText>
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
		fontFamily: 'rubik',
	},
});
