//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet } from 'react-native';

//  PrimaryButton component
const Button = ({ children, style, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				{ ...style },
				pressed && styles.pressed,
			]}
			onPress={onPress}>
			<Text style={styles.textColor}>{children}</Text>
		</Pressable>
	);
};

//  Button styleSheet
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		paddingVertical: 15,
		borderRadius: 25,
		margin: 10,
		overflow: 'hidden',
		width: '60%',
	},
	textColor: {
		color: 'white',
	},
	pressed: {
		opacity: 0.75,
	},
});

export default Button;
