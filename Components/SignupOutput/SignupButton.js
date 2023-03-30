// RN core components & API imports
import { StyleSheet, Text, View, Pressable } from 'react-native';

// Constants
import Colors from './../../Constants/Colors';

// SignupButton component
const SignupButton = ({ children, onPress }) => {
	return (
		<View>
			<Pressable
				style={({ pressed }) => [styles.button, , pressed && styles.pressed]}
				onPress={onPress}>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
	);
};

// SignupButton StyleSheet
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		padding: '5%',
		borderRadius: 30,
		overflow: 'hidden',
		backgroundColor: Colors.Buttons.third,
		marginVertical: '10%',
	},
	text: {
		fontFamily: 'rubik',
		color: 'white',
		fontSize: 17,
	},
	pressed: {
		opacity: 0.75,
	},
});

export default SignupButton;
