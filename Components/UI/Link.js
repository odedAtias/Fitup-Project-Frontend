// RN Core components & API imports
import { StyleSheet, Text, Pressable } from 'react-native';

// Constants
import Colors from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// Link component
const Link = ({ children, onPress, style, icon }) => (
	<Pressable onPress={onPress} style={styles.container}>
		<Text style={[styles.text, style, { marginRight: icon ? 5 : 0 }]}>
			{children}
		</Text>
		{icon && <Ionicons name={icon.name} color={icon.color} size={icon.size} />}
	</Pressable>
);

// Link StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 15,
		color: Colors.Links.primary,
		fontWeight: '400',
		fontFamily: 'rubik',
	},
});

export default Link;
