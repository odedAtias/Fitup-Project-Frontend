// Status Bar
import { StatusBar } from 'expo-status-bar';

// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Custom Components
import Login from './Screens/LoginOutput/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Categories from './Screens/TraineeScreens/Categories';
import FavoriteTrainers from './Screens/TraineeScreens/FavoriteTrainers';
import RegisteredEvents from './Screens/TraineeScreens/RegisteredEvents';
import PersonalDetails from './Screens/TraineeScreens/PersonalDetails';
import Logo from './Components/Logo';
import EventsList from './Screens/TraineeScreens/EventsList';
import EventDetails from './Screens/TraineeScreens/EventDetails';
import RegisterEventForm from './Screens/TraineeScreens/RegisterEventForm';
import RegistrationSucceed from './Screens/TraineeScreens/RegistrationSucceed';

// Ionicons
import { Ionicons } from '@expo/vector-icons';

// Navigators Initialize`s
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Constants
import Colors from './Constants/Colors';

// Search Events Stack Navigator
const StackSearchEvent = () => {
	<Stack.Navigator>
		<Stack.Screen name='Categories' component={Categories} />
		<Stack.Screen name='EventsList' component={EventsList} />
		<Stack.Screen name='EventDetails' component={EventDetails} />
		<Stack.Screen name='RegisterEventForm' component={RegisterEventForm} />
		<Stack.Screen name='RegistrationSucceed' component={RegistrationSucceed} />
	</Stack.Navigator>;
};

// BottomTab header component
const BottomTabHeader = () => {
	return (
		<View
			style={{
				height: '20%',
				padding: '20%',
				backgroundColor: 'red',
			}}>
			<Logo imageWidth={200} imageHeight={120} />
		</View>
	);
};

// Auxilliary Components of trainee bottomTabs
const TraineeBottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Categories' component={StackSearchEvent} />
			<Tab.Screen name='FavoriteTrainers' component={FavoriteTrainers} />
			<Tab.Screen name='RegisteredEvents' component={RegisteredEvents} />
			<Tab.Screen name='PersonalDetails' component={PersonalDetails} />
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
