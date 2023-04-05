// Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Components
import Events from '../../../Screens/TraineeScreens/Events';
import EventDetails from '../../../Screens/TraineeScreens/EventDetails';
import RegisterEvent from '../../../Screens/TraineeScreens/RegisterEvent';
import RegistrationSucceed from '../../../Screens/TraineeScreens/RegistrationSucceed';
import TrainerProfile from '../../../Screens/TraineeScreens/TrainerProfile';
import Categories from '../../../Screens/TraineeScreens/Categories';

// Constants
import Colors from '../../../Constants/Colors';

// Navigators
const Stack = createNativeStackNavigator();

// Custom components
import Header from '../../UI/Header';

// StackSearchEvent Component
const StackSearchEvent = () => (
	<Stack.Navigator
		mode='modal'
		screenOptions={{
			header: ({ navigation }) => (
				<Header
					label={'Fit\nUp'}
					containerStyle={{
						backgroundColor: Colors.Headers.secondary,
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
		}}>
		<Stack.Screen
			name='Categories'
			component={Categories}
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
		<Stack.Screen name='Events' component={Events} />
		<Stack.Screen name='EventDetails' component={EventDetails} />
		<Stack.Screen name='RegisterEvent' component={RegisterEvent} />
		<Stack.Screen name='RegistrationSucceed' component={RegistrationSucceed} />
		<Stack.Screen name='TrainerProfile' component={TrainerProfile} />
	</Stack.Navigator>
);

export default StackSearchEvent;
