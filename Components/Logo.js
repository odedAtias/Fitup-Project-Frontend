//  RN Core components & API imports
import { StyleSheet, View, Image } from 'react-native';

//  Logo component
const Logo = ({ imageWidth, imageHeight }) => (
	<View style={styles.logoContainer}>
		<Image
			style={{ width: imageWidth, height: imageHeight }}
			source={require('../Images/FitUp-Logo.png')}
		/>
	</View>
);

// Logo StyleSheet
const styles = StyleSheet.create({
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Logo;
