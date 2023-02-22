// Fonts
import Blanka from '../assets/fonts/Blanka-Regular.otf';
// Hooks imports
import { useFonts } from 'expo-font';
// RN core components & API imports
import { View, Text } from 'react-native';

const Symbol = () => {
	const [loaded] = useFonts({
		blanka: Blanka,
	});
	console.log(loaded);
	if (loaded)
		return (
			<View>
				<Text style={{ fontFamily: 'blanka' }}>Fit UP</Text>
			</View>
		);
};

export default Symbol;
