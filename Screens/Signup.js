// Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators Initialize`s
const Stack = createNativeStackNavigator();

// Custom components import
import Step1 from '../Components/SignupOutput/Step1';
import Step2 from '../Components/SignupOutput/Step2';
import Step3 from '../Components/SignupOutput/Step3';

// Constants
import Colors from './../Constants/Colors';

// Contexts imports
import SignupContextProvider from '../store/SignupContext';

// SignUp Component
const Signup = () => {
	return (
		<SignupContextProvider>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.Backgrounds.primary,
						flex: 1,
						padding: 10,
					},
				}}>
				<Stack.Screen name='Step1' component={Step1} />
				<Stack.Screen name='Step2' component={Step2} />
				<Stack.Screen name='Step3' component={Step3} />
			</Stack.Navigator>
		</SignupContextProvider>
	);
};

export default Signup;
