// RN core components & API imports
import {StyleSheet, Text, View} from 'react-native';

// SubHeadingText component
const SubHeadingText = ({children}) => (
	<View style={styles.container}>
		<Text style={styles.subHeadingText}>{children}</Text>
	</View>
);

// SubHeadingText StyleSheet
const styles = StyleSheet.create({
	container: {
		marginBottom: 2,
		maxWidth: '95%',
	},
	subHeadingText: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: 'rubik',
	},
});

export default SubHeadingText;
