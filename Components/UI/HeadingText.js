// RN core components & API imports
import {StyleSheet, Text, View} from 'react-native';

// HeadingText component
const HeadingText = ({children}) => (
	<View style={styles.container}>
		<Text style={styles.headingText}>{children}</Text>
	</View>
);

// HeadingText StyleSheet
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

export default HeadingText;
