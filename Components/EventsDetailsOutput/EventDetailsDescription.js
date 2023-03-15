// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Custom components imports
import Title from '../Title';
import TextBox from '../TextBox';

// Constants
import Colors from '../../Constants/Colors';

// EventDetailsDescription component
const EventDetailsDescription = ({ description }) => (
	<View style={styles.container}>
		<Title>Description</Title>
		<TextBox bgColor={Colors.Backgrounds.third} txtColor={Colors.Texts.primary}>
			{description}
		</TextBox>
	</View>
);

// EventDetailsDescription
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

export default EventDetailsDescription;
