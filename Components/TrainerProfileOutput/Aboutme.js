// RN core components & API imports
import { View } from 'react-native';

// Custom components imports
import Title from '../Title';
import TextBox from '../TextBox';

// Constants
import Colors from '../../Constants/Colors';

// Aboutme component
const Aboutme = ({ description }) => (
	<View>
		<Title>About me</Title>
		<TextBox bgColor={Colors.Backgrounds.third} txtColor={Colors.Texts.primary}>
			{description}
		</TextBox>
	</View>
);

export default Aboutme;
