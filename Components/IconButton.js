// RN core components & API imports
import { Pressable, View, StyleSheet } from 'react-native';
// Ionicons
import { Ionicons } from '@expo/vector-icons';

// IconButton component
const IconButton = ({ icon, size, color, onPress }) => {
	// IconButton component
	return (
		<Pressable onPress={onPress}>
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

export default IconButton;
