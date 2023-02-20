//  RN Core components & API imports
import { StyleSheet, View, Image } from 'react-native';

//  Logo component
const Logo = ({ imageWidth, imageHeight }) => {
	return (
		<View style={styles.logoContainer}>
			<Image
				style={{ width: imageWidth, height: imageHeight }}
				source={require('../Images/FitUp-Logo.png')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Logo;
