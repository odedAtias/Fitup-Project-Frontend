// Navigation Imports
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Ionicons
import {Ionicons} from '@expo/vector-icons';

// Constants
import Colors from '../../../Constants/Colors';

// Navigators
const Tab = createBottomTabNavigator();

// Screen Components
import FavoriteTrainers from '../../../Screens/TraineeScreens/FavoriteTrainers';
import RegisteredEvents from '../../../Screens/TraineeScreens/RegisteredEvents';

// Custom Navigators components
import StackSearchEvent from './StackSearchEvent';
import StackManageDetails from './StackManageDetails';

// Custom components
import Header from '../../UI/Header';

// TraineeBottomTab Component
const TraineeBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				header: () => (
					<Header
						label={'Fit\nup'}
						containerStyle={{
							backgroundColor: Colors.Headers.primary,
							padding: Platform.OS === 'ios' ? 10 : 20,
						}}
					/>
				),
				tabBarStyle: {
					backgroundColor: Colors.Headers.primary,
					position: 'absolute',
					bottom: 10,
					left: 20,
					right: 20,
					borderRadius: 15,
					elevation: 0,
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors.Texts.third,
				tabBarInactiveTintColor: Colors.Texts.secondary,
			}}
		>
			<Tab.Screen
				name='StackSearchEvent'
				component={StackSearchEvent}
				options={{
					headerShown: false,
					tabBarIcon: ({focused, color}) => {
						let iconName = focused ? 'search' : 'search-outline';
						return (
							<Ionicons
								name={iconName}
								size={focused ? 35 : 25}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='FavoriteTrainers'
				component={FavoriteTrainers}
				options={{
					tabBarIcon: ({focused, color}) => {
						let iconName = focused ? 'bookmarks' : 'bookmarks-outline';
						return (
							<Ionicons
								name={iconName}
								size={focused ? 35 : 25}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='RegisteredEvents'
				component={RegisteredEvents}
				options={{
					tabBarIcon: ({focused, color}) => {
						let iconName = focused ? 'calendar' : 'calendar-outline';
						return (
							<Ionicons
								name={iconName}
								size={focused ? 35 : 25}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='StackManageDetails'
				component={StackManageDetails}
				options={{
					headerShown: false,
					tabBarIcon: ({focused, color}) => {
						let iconName = focused ? 'person' : 'person-outline';
						return (
							<Ionicons
								name={iconName}
								size={focused ? 35 : 25}
								color={color}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default TraineeBottomTab;
