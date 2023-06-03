// Navigation Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators
const Stack = createNativeStackNavigator();

// Screen Components
import Welcome from '../../../Screens/TrainerScreens/Welcome';
import UpcomingEvents from '../../../Screens/TrainerScreens/UpcomingEvents';
import Feedbacks from '../../../Screens/TrainerScreens/Feedbacks';
import PostEvent from './../../../Screens/TrainerScreens/PostEvent';

// Custom components imports
import Header from '../../UI/Header';

// Constants
import Colors from '../../../Constants/Colors';

// WelcomeNavigator component
const WelcomeNavigator = () => {
	return (
		<Stack.Navigator
			mode='modal'
			screenOptions={{
				header: ({navigation}) => (
					<Header
						label={'Fit\nUp'}
						containerStyle={{
							backgroundColor: Colors.Headers.primary,
							padding: Platform.OS === 'ios' ? 10 : 10,
							paddingTop: Platform.OS === 'ios' ? 10 : 30,
						}}
						labelStyle={{
							fontSize: 50,
							color: Colors.Texts.primary,
						}}
						onPressLeft={() => navigation.goBack()}
					/>
				),
				contentStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen
				name='Welcome'
				component={Welcome}
				options={{
					header: () => (
						<Header
							label={'Fit\nUp'}
							containerStyle={{
								backgroundColor: Colors.Headers.primary,
								padding: Platform.OS === 'ios' ? 10 : 20,
							}}
						/>
					),
				}}
			/>
			<Stack.Screen name='PostEvent' component={PostEvent} />
			<Stack.Screen name='UpcomingEvents' component={UpcomingEvents} />
			<Stack.Screen name='Feedbacks' component={Feedbacks} />
		</Stack.Navigator>
	);
};

export default WelcomeNavigator;
