// Hooks imports
import { useFonts } from 'expo-font';

// Fonts
import Blanka from './assets/fonts/Blanka-Regular.otf';

// Status Bar
import { StatusBar } from 'expo-status-bar';

// RN core components & API imports
import { StyleSheet, SafeAreaView, Text } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Custom Components
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Categories from './Screens/TraineeScreens/Categories';
import FavoriteTrainers from './Screens/TraineeScreens/FavoriteTrainers';
import RegisteredEvents from './Screens/TraineeScreens/RegisteredEvents';
import PersonalDetails from './Screens/TraineeScreens/PersonalDetails';
import Events from './Screens/TraineeScreens/Events';
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
import { Platform } from 'react-native';

// Search Events Stack Navigator
const StackSearchEvent = () => (
	<Stack.Navigator
		mode='modal'
		screenOptions={{
			header: ({ navigation }) => {
				return (
					<Header
						label={'Fit\nUp'}
						containerStyle={{
							backgroundColor: Colors.Headers.primary,
							padding: 10,
						}}
						onPress={() => navigation.goBack()}
					/>
				);
			},
		}}>
		<Stack.Screen name='Categories' component={Categories} />
		<Stack.Screen name='Events' component={Events} />
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
				header: () => (
					<Header
						label={'Fit\nup'}
						containerStyle={{
							backgroundColor: Colors.Headers.primary,
							paddingBottom: 10,
							paddingTop: Platform.OS === 'ios' ? 10 : 50,
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
				tabBarActiveTintColor: Colors.Backgrounds.third,
				tabBarInactiveTintColor: Colors.Backgrounds.secondary,
			}}>
			<Tab.Screen
				name='StackSearchEvent'
				component={StackSearchEvent}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color }) => {
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
					tabBarIcon: ({ focused, color }) => {
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
					tabBarIcon: ({ focused, color }) => {
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
				name='PersonalDetails'
				component={PersonalDetails}
				options={{
					tabBarIcon: ({ focused, color }) => {
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

// App Component
export default function App() {
	// Header font loader
	const [loaded] = useFonts({
		blanka: Blanka,
	});
	if (loaded)
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar style='auto' />
				{/* Stack Navigation Container (Contains 4 Screens)*/}
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							header: ({ navigation }) => {
								return (
									<Header
										label={'Fit\nUp'}
										containerStyle={{
											backgroundColor: Colors.Headers.secondary,
											padding: 10,
										}}
										onPress={() => navigation.goBack()}
									/>
								);
							},
							contentStyle: {
								backgroundColor: Colors.Backgrounds.primary,
							},
						}}>
						<Stack.Screen
							name='Login'
							component={Login}
							options={{ headerShown: false, presentation: 'modal' }}
						/>
						<Stack.Screen name='Signup' component={Signup} />
						<Stack.Screen
							name='ForgotPassword'
							component={ForgotPassword}
							options={{ presentation: 'modal' }}
						/>
						<Stack.Screen
							name='TraineeBottomTab'
							component={TraineeBottomTab}
							options={{ headerShown: false, presentation: 'containedModal' }}
						/>
						{/* Stack Screen of trainersBottomTabs */}
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		);
}

// App StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
