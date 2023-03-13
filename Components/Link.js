//  RN Core components & API imports
import { StyleSheet, Text, Pressable } from 'react-native';
// constants
import Colors from './../Constants/Colors';

// Link component
const Link = ({ children, onPress, style }) => (
	<Pressable onPress={onPress} style={style.container}>
		<Text style={[styles.text, style]}>{children}</Text>
	</Pressable>
);

export default Link;

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		color: Colors.Links.primary,
		fontWeight: '400',
	},
});
