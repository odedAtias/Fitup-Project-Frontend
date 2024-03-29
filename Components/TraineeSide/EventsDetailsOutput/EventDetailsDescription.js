// RN core components & API imports
import {View, StyleSheet} from 'react-native';

// Custom components imports
import Title from '../../UI/Title';
import TextBox from '../../UI/TextBox';

// Constants
import Colors from '../../../Constants/Colors';

// EventDetailsDescription component
const EventDetailsDescription = ({description}) => {
	return (
		<View style={styles.container}>
			<Title>Description</Title>
			<TextBox
				bgColor={Colors.Backgrounds.secondary}
				txtColor={Colors.Texts.primary}
			>
				{description}
			</TextBox>
		</View>
	);
};

// EventDetailsDescription
const styles = StyleSheet.create({
	container: {
		marginTop: '2%',
	},
});

export default EventDetailsDescription;
