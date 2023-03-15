// RN Core components
import { StyleSheet, Text, View } from 'react-native';

// RubikText component
const RubikText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

// RubikText component
const styles = StyleSheet.create({
	text: {
		fontFamily: 'rubik',
		fontSize: 18,
	},
});

export default RubikText;
