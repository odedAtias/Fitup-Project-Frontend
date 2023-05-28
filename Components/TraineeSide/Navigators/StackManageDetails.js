// Navigation Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Components
import PersonalDetails from '../../../Screens/TraineeScreens/PersonalDetails';
import ManageDetails from '../../../Screens/TraineeScreens/ManageDetails';

// Custom components imports
import Header from '../../UI/Header';

// Navigators
const Stack = createNativeStackNavigator();

// Constatns
import Colors from '../../../Constants/Colors';

// StackManageDetails component
const StackManageDetails = () => {
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
			<Stack.Screen name='PersonalDetails' component={PersonalDetails} />
			<Stack.Screen
				name='ManageDetails'
				component={ManageDetails}
				options={{headerShown: true}}
			/>
		</Stack.Navigator>
	);
};

export default StackManageDetails;
