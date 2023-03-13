// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Constants
import Colors from '../Constants/Colors';

// Custom components imports
import Title from './Title';
import TextBox from './TextBox';

// Description component
const Description = ({ description }) => (
	<View style={styles.container}>
		<Title>Description</Title>
		<TextBox
			bgColor={Colors.Backgrounds.male}
			txtColor={Colors.Texts.secondary}>
			{description}
		</TextBox>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginTop: '2%',
	},
	scrollContainer: {
		padding: '5%',
		backgroundColor: Colors.Backgrounds.male,
		maxHeight: 130,
		borderRadius: 10,
	},
	text: { color: 'white', fontSize: 15 },
});

export default Description;
