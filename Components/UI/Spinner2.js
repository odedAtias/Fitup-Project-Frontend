// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

// Spinner Component
const Spinner2 = () => {
	return (
		<View style={[StyleSheet.absoluteFillObject, styles.container]}>
			<LottieView
				source={require('../../spinners/loader2.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

// Spinner StyleSheet
const styles = StyleSheet.create({
	contaier: {
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
		zIndex: 1,
	},
});

export default Spinner2;
