import { StyleSheet, Text, View } from 'react-native';

const SubHeadingText = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.subHeadingText}>{children}</Text>
		</View>
	);
};

export default SubHeadingText;

const styles = StyleSheet.create({
	container: {
		marginBottom: 2,
	},
	subHeadingText: {
		fontSize: 16,
		fontWeight: '500',
	},
});
