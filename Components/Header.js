// RN core components & API imports
import { View, Text, StyleSheet } from 'react-native';

// Custom components imports
import IconButton from './IconButton';

// Header component
const Header = ({
	label,
	containerStyle,
	labelStyle,
	iconsColor,
	onPressLeft,
	rightButton,
}) => {
	return (
		<View style={[styles.container, containerStyle]}>
			{/* BackButton container */}
			<View style={styles.flex}>
				{onPressLeft && (
					<IconButton
						icon='arrow-back-outline'
						size={30}
						onPress={onPressLeft}
						color={iconsColor}
					/>
				)}
			</View>
			{/* label container*/}
			<View>
				<Text style={[styles.label, labelStyle]}>{label}</Text>
			</View>
			{/* Optional RightButton container */}
			<View style={styles.flex}>{rightButton}</View>
		</View>
	);
};

// Header StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontFamily: 'blanka',
		fontSize: 45,
		textAlign: 'center',
	},
	flex: {
		width: '25%',
		alignItems: 'flex-start',
	},
});

export default Header;
