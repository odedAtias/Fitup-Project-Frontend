// RN core components & API imports
import { Pressable, StyleSheet } from 'react-native';
// Ionicons
import { Ionicons } from '@expo/vector-icons';

// IconButton component
const IconButton = ({ icon, size, color, onPress }) => {
	// IconButton component
	return (
		<Pressable onPress={onPress} style={styles.container}>
			{/* We create this view for style reasons */}
			<Ionicons
				name={icon}
				size={size}
				color={color}
				onPress={onPress}
				suppressHighlighting={true}
			/>
		</Pressable>
	);
};

// IconButton StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default IconButton;
