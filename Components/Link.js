// RN Core components & API imports
import { StyleSheet, Text, Pressable } from 'react-native';

// Constants
import Colors from './../Constants/Colors';

// Link component
const Link = ({ children, onPress, style }) => (
	<Pressable onPress={onPress}>
		<Text style={[styles.text, style]}>{children}</Text>
	</Pressable>
);

// Link StyleSheet
const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		color: Colors.Links.primary,
		fontWeight: '400',
	},
});

export default Link;
