// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

import IconButton from './IconButton';

// Header component
const Header = ({ label, containerStyle, labelStyle, onPress, iconColor }) => {
	return (
		<View style={[styles.container, containerStyle]}>
			{/* BackButton container */}
			<View style={styles.flex}>
				{onPress && (
					<IconButton
						icon='arrow-back-outline'
						size={30}
						onPress={onPress}
						color={iconColor}
					/>
				)}
			</View>
			{/* label container*/}
			<View>
				<Text style={[styles.label, labelStyle]}>{label}</Text>
			</View>
			{/* Auxilliary view */}
			<View style={styles.flex}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontFamily: 'blanka',
		fontSize: 50,
		textAlign: 'center',
	},
	flex: {
		width: 50,
	},
});

export default Header;
