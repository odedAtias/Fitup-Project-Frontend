//  RN Core components & API imports
import { Text, Pressable, StyleSheet } from 'react-native';

//  Button component
const Button = ({ children, style, onPress }) => (
	<Pressable
		style={({ pressed }) => [
			styles.button,
			{ ...style },
			pressed && styles.pressed,
		]}
		onPress={onPress}>
		<Text style={styles.text}>{children}</Text>
	</Pressable>
);

//  Button StyleSheet
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		paddingVertical: 15,
		borderRadius: 25,
		margin: 10,
		overflow: 'hidden',
		width: '60%',
	},
	text: {
		fontFamily: 'rubik',
		color: 'white',
		fontSize: 15,
	},
	pressed: {
		opacity: 0.75,
	},
});

export default Button;
