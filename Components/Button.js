//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet } from 'react-native';

//  PrimaryButton component
const Button = ({ children, style, onPress }) => {
	return (
		<View style={[styles.buttonOuterContainer, { ...style }]}>
			<Pressable style={styles.buttonInnerContainer} onPress={onPress}>
				<Text style={styles.textColor}>{children}</Text>
			</Pressable>
		</View>
	);
};

//  Button styleSheet
const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 25,
		margin: 10,
		overflow: 'hidden',
		width: '60%',
	},

	buttonInnerContainer: {
		alignItems: 'center',
		paddingVertical: 15,
	},

	textColor: {
		color: 'white',
	},
});

export default Button;
