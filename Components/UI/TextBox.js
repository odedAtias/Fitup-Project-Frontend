// RN core components & API imports
import {View, Text, StyleSheet, ScrollView} from 'react-native';

// TextBox component
const TextBox = ({children, bgColor, txtColor, maxHeight, containerStyle}) => (
	<View
		style={[
			styles.scrollContainer,
			{backgroundColor: bgColor, maxHeight: maxHeight, ...containerStyle},
		]}
	>
		<ScrollView>
			<Text style={[styles.text, {color: txtColor}]}>{children}</Text>
		</ScrollView>
	</View>
);

// TextBox StyleSheet
const styles = StyleSheet.create({
	scrollContainer: {
		padding: '5%',
		maxHeight: 130,
		borderRadius: 10,
	},
	text: {
		fontSize: 16,
		fontFamily: 'rubik',
	},
});

export default TextBox;
