// Navigation Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Components
import PersonalDetails from '../../../Screens/TrainerScreens/PersonalDetails';
import ManageDetails from '../../../Screens/TraineeScreens/ManageDetails';

// Custom components imports
import Header from '../../UI/Header';

// Navigators
const Stack = createNativeStackNavigator();

// Constatns
import Colors from '../../../Constants/Colors';

// StackManageDetailsTrainee component
const StackManageDetailsTrainee = () => {
	return (
		<Stack.Navigator
			mode='modal'
			screenOptions={{
				contentStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen
				name='PersonalDetails'
				component={PersonalDetails}
				options={{
					header: ({navigation}) => (
						<Header
							label={'Fit\nup'}
							containerStyle={{
								backgroundColor: Colors.Headers.primary,
								padding: Platform.OS === 'ios' ? 10 : 20,
							}}
							rightButton={'create-outline'}
							onPressRight={() =>
								navigation.navigate('ManageDetails', {isTrainer: true})
							}
						/>
					),
				}}
			/>
			<Stack.Screen
				name='ManageDetails'
				component={ManageDetails}
				options={{
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
			/>
		</Stack.Navigator>
	);
};

export default StackManageDetailsTrainee;
