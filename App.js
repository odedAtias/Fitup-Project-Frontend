// Hooks imports
import {useFonts} from 'expo-font';

// Fonts imports
import Blanka from './assets/fonts/Blanka.otf';
import RubikLight from './assets/fonts/Rubik-Light.ttf';
import Rubik from './assets/fonts/Rubik.ttf';

// Status Bar
import {StatusBar} from 'expo-status-bar';

// RN core components & API imports
import {StyleSheet, SafeAreaView, Platform, Text} from 'react-native';

// Navigation Imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Components
import Login from './Screens/GenericScreens/Login';
import ForgotPassword from './Screens/GenericScreens/ForgotPassword';

// Custom Navigators components
import Signup from './Screens/GenericScreens/Signup';
import TraineeBottomTab from './Components/TraineeSide/Navigators/TraineeBottomTab';
import TrainerBottomTab from './Components/TrainerSide/Navigators/TrainerBottomTab';

//Custom Components
import Header from './Components/UI/Header';

// Context providers
import TraineeContextProvider from './store/TraineeContext';

// Navigators
const Stack = createNativeStackNavigator();

// Constants
import Colors from './Constants/Colors';
import EventsContextProvider from './store/EventsContext';
import TrainerContextProvider from './store/TrainerContext';

// App Component
export default function App() {
	// Header font loader
	const [loaded] = useFonts({
		blanka: Blanka,
		rubik: Rubik,
		rubikLight: RubikLight,
	});
	if (loaded)
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar style='dark' />
				{/* Our contextProvider */}
				<EventsContextProvider>
					<TrainerContextProvider>
						<TraineeContextProvider>
							{/* Stack Navigation Container (Contains 4 Screens)*/}
							<NavigationContainer>
								<Stack.Navigator
									screenOptions={{
										header: ({navigation}) => {
											return (
												<Header
													label={'Fit\nUp'}
													containerStyle={{
														backgroundColor: Colors.Backgrounds.primary,
														padding: Platform.OS === 'ios' ? 10 : 30,
													}}
													onPress={() => navigation.goBack()}
												/>
											);
										},
										contentStyle: {
											backgroundColor: Colors.Backgrounds.primary,
										},
									}}
								>
									<Stack.Screen
										name='Login'
										component={Login}
										options={{headerShown: false}}
									/>
									<Stack.Screen
										name='Signup'
										component={Signup}
										options={{headerShown: false}}
									/>
									<Stack.Screen
										name='ForgotPassword'
										component={ForgotPassword}
										options={{presentation: 'modal'}}
									/>
									{/* The gate to the trainee app */}
									<Stack.Screen
										name='TraineeBottomTab'
										component={TraineeBottomTab}
										options={{
											headerShown: false,
											presentation: 'containedModal',
										}}
									/>
									<Stack.Screen
										name='TrainerBottomTab'
										component={TrainerBottomTab}
										options={{
											headerShown: false,
											presentation: 'containedModal',
										}}
									/>
								</Stack.Navigator>
							</NavigationContainer>
						</TraineeContextProvider>
					</TrainerContextProvider>
				</EventsContextProvider>
			</SafeAreaView>
		);
	else {
		return <Text>Loading ... </Text>;
	}
}

// App StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
