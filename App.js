// Status Bar
import { StatusBar } from 'expo-status-bar';

// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Custom Components
import Login from './Screens/LoginOutput/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Categories from './Screens/TraineeScreens/CategoriesOutput/Categories';
import FavoriteTrainers from './Screens/TraineeScreens/FavoriteTrainers';
import RegisteredEvents from './Screens/TraineeScreens/RegisteredEvents';
import PersonalDetails from './Screens/TraineeScreens/PersonalDetails';
import EventsList from './Screens/TraineeScreens/EventsList';
import EventDetails from './Screens/TraineeScreens/EventDetails';
import RegisterEventForm from './Screens/TraineeScreens/RegisterEventForm';
import RegistrationSucceed from './Screens/TraineeScreens/RegistrationSucceed';
import Header from './Components/Header';

// Ionicons
import { Ionicons } from '@expo/vector-icons';

// Navigators Initialize`s
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Constants
import Colors from './Constants/Colors';

// Search Events Stack Navigator
const StackSearchEvent = () => (
	<Stack.Navigator>
		<Stack.Screen
			name='Categories'
			component={Categories}
			options={{
				header: () => <Header label={'Fit\nUp'} />,
			}}
		/>
		<Stack.Screen
			name='EventsList'
			component={EventsList}
			options={{
				headerTitleAlign: 'center',
			}}
		/>
		<Stack.Screen name='EventDetails' component={EventDetails} />
		<Stack.Screen name='RegisterEventForm' component={RegisterEventForm} />
		<Stack.Screen name='RegistrationSucceed' component={RegistrationSucceed} />
	</Stack.Navigator>
);

// Auxilliary Components of trainee bottomTabs
const TraineeBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.Backgrounds.primary },
				header: () => (
					<Header bgColor={Colors.Headers.primary} label={'Fit\nUp'} />
				),
			}}>
			<Tab.Screen
				name='StackSearchEvent'
				component={StackSearchEvent}
				options={{
					headerShown: false,
					tabBarLabel: 'Explore',
					tabBarActiveTintColor: Colors.Texts.primary,
					tabBarActiveBackgroundColor: Colors.Backgrounds.secondary,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='search-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='FavoriteTrainers'
				component={FavoriteTrainers}
				options={{
					tabBarLabel: 'Favorite Trainers',
					tabBarActiveTintColor: Colors.Texts.primary,
					tabBarActiveBackgroundColor: Colors.Backgrounds.secondary,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='star-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='RegisteredEvents'
				component={RegisteredEvents}
				options={{
					tabBarLabel: 'My Events',
					tabBarActiveTintColor: Colors.Texts.primary,
					tabBarActiveBackgroundColor: Colors.Backgrounds.secondary,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='calendar-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='PersonalDetails'
				component={PersonalDetails}
				options={{
					tabBarLabel: 'My Profile',
					tabBarActiveTintColor: Colors.Texts.primary,
					tabBarActiveBackgroundColor: Colors.Backgrounds.secondary,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='person-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

// App Component
export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			{/* Stack Navigation Container (Contains 4 Screens)*/}
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Login' component={Login} />
					<Stack.Screen name='Signup' component={Signup} />
					<Stack.Screen name='ForgotPassword' component={ForgotPassword} />
					<Stack.Screen name='TraineeBottomTab' component={TraineeBottomTab} />
					{/* Stack Screen of trainersBottomTabs */}
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

// App StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
