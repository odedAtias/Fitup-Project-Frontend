// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {Text, View, StyleSheet} from 'react-native';

// Context's imports
import {TraineeContext} from '../../store/TraineeContext';

// Custom components imports
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import Title from '../../Components/UI/Title';
import TraineeMetrics from '../../Components/TraineeSide/PesonalDetailsOutput/TraineeMetrics';
import Button from '../../Components/UI/Button';
import IconButton from './../../Components/UI/IconButton';

// Constants
import Colors from './../../Constants/Colors';

// PersonalDetails Component
const PersonalDetails = ({navigation}) => {
	// initialize the trainee context
	const context = useContext(TraineeContext);

	return (
		<View style={styles.container}>
			<View
				style={{
					width: '90%',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View style={{width: '30%'}}></View>
				<TrainerImage
					imageUrl={context.trainee.image}
					style={{
						width: 130,
						height: 130,
						borderRadius: 100,
					}}
				/>
				<View
					style={{
						width: '33%',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'flex-start',
					}}
				>
					<IconButton
						color='black'
						icon='create-outline'
						size={30}
						onPress={() => navigation.navigate('ManageDetails')}
					/>
				</View>
			</View>
			<Title>
				{context.trainee.firstName + ' ' + context.trainee.lastName}
			</Title>
			<Text style={styles.headingText}>In fitup from 15.02.2023</Text>
			<TraineeMetrics
				height={context.trainee.height}
				weight={context.trainee.weight}
			/>
			{/* <CategoryHorizontalList /> */}
			<Button
				style={{
					backgroundColor: '#F06A6E',
					color: 'white',
					borderRadius: 10,
					width: '80%',
					marginTop: '5%',
				}}
				onPress={() => navigation.navigate('Login')}
				textStyle={{fontSize: 20}}
			>
				Sign Out
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	logOutButton: {
		color: Colors.Headers.primary,
		fontSize: 25,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fffaf7',
		paddingTop: '5%',
	},

	headingText: {
		fontSize: 17,
		fontFamily: 'rubik',
		color: Colors.Texts.fifth,
	},
	spacing: {
		marginTop: 10,
	},
});

export default PersonalDetails;
