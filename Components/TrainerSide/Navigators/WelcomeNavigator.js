// Navigation Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators
const Stack = createNativeStackNavigator();

// Screen Components
import Feedbacks from '../../../Screens/TrainerScreens/Feedbacks';
import UpcomingEventsCards from '../../../Screens/TrainerScreens/UpcomingEventsCards';
import Welcome from '../../../Screens/TrainerScreens/Welcome';
import PostEvent from './../../../Screens/TrainerScreens/PostEvent';
import EventDetails from '../../../Screens/TraineeScreens/EventDetails';
import ManageEvent from '../../../Screens/TrainerScreens/ManageEvent';

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
			<Stack.Screen
				name='UpcomingEventsCards'
				component={UpcomingEventsCards}
			/>
			<Stack.Screen name='EventDetails' component={EventDetails} />
			<Stack.Screen name='Feedbacks' component={Feedbacks} />
			<Stack.Screen name='ManageEvent' component={ManageEvent} />
		</Stack.Navigator>
	);
};

export default WelcomeNavigator;
