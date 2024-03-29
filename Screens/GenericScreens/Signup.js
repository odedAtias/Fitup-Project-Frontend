// Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators Initialize`s
const Stack = createNativeStackNavigator();

// Custom components import
import Header from '../../Components/UI/Header';
import Step1 from '../../Components/Registration/SignupOutput/Step1';
import Step2 from '../../Components/Registration/SignupOutput/Step2';
import Step3 from '../../Components/Registration/SignupOutput/Step3';
import Step4 from '../../Components/Registration/SignupOutput/Step4';

// Constants
import Colors from '../../Constants/Colors';

// Contexts imports
import SignupContextProvider from '../../store/SignupContext';

// SignUp Component
const Signup = () => {
	return (
		<SignupContextProvider>
			<Stack.Navigator
				screenOptions={{
					header: ({ navigation }) => {
						return (
							<Header
								label={'Fit\nUp'}
								containerStyle={{
									backgroundColor: Colors.Headers.secondary,
									paddingVertical: Platform.OS === 'ios' ? '5%' : '8%',
									paddingHorizontal: '5%',
									marginBottom: Platform.OS === 'ios' ? 10 : 5,
								}}
								labelStyle={{
									fontSize: Platform.OS === 'ios' ? 60 : 50,
									color: Colors.Texts.primary,
								}}
								onPressLeft={() => navigation.goBack()}
							/>
						);
					},
					contentStyle: {
						backgroundColor: Colors.Backgrounds.primary,
						flex: 1,
						padding: 10,
					},
				}}>
				<Stack.Screen name='Step1' component={Step1} />
				<Stack.Screen name='Step2' component={Step2} />
				<Stack.Screen name='Step3' component={Step3} />
				<Stack.Screen name='Step4' component={Step4} />
			</Stack.Navigator>
		</SignupContextProvider>
	);
};

export default Signup;
