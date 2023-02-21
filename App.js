// Status Bar
import { StatusBar } from 'expo-status-bar';

// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Custom Components
import Login from './Screens/LoginOutput/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Categories from './Screens/TraineeScreens/Categories';
import FavoriteTrainers from './Screens/TraineeScreens/FavoriteTrainers';
import RegisteredEvents from './Screens/TraineeScreens/RegisteredEvents';
import PersonalDetails from './Screens/TraineeScreens/PersonalDetails';



// Navigators Initialize`s
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Auxilliary Components of trainee bottomTabs
const TraineeBottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Categories' component={Categories} />
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
				<Stack.Navigator>
					<Stack.Screen
						name='Login'
						component={Login}
						options={{ headerShown: false }}
					/>
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
