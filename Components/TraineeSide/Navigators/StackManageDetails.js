// Navigation Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Components
import PersonalDetails from '../../../Screens/TraineeScreens/PersonalDetails';
import ManageDetails from '../../../Screens/TraineeScreens/ManageDetails';

// Navigators
const Stack = createNativeStackNavigator();

// StackManageDetails component
const StackManageDetails = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name='PersonalDetails' component={PersonalDetails} />
			<Stack.Screen name='ManageDetails' component={ManageDetails} />
		</Stack.Navigator>
	);
};

export default StackManageDetails;
