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
import Link from '../../Components/UI/Link';

// Constants
import Colors from './../../Constants/Colors';

// PersonalDetails Component
const PersonalDetails = ({navigation}) => {
	// initialize the trainee context
	const context = useContext(TraineeContext);

	return (
		<View style={styles.container}>
			<TrainerImage
				imageUrl={context.trainee.image}
				style={{
					width: 130,
					height: 130,
					borderRadius: 100,
				}}
			/>
			<Title>
				{context.trainee.firstName + ' ' + context.trainee.lastName}
			</Title>
			<Text style={styles.headingText}>In fitup from 15.02.2023</Text>
			<TraineeMetrics
				height={context.trainee.height}
				weight={context.trainee.weight}
			/>
			{/* <CategoryHorizontalList /> */}
			<View style={{marginTop: '15%'}}>
				<Link
					style={styles.logOutButton}
					onPress={() => navigation.navigate('Login')}
				>
					Log out
				</Link>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	logOutButton: {
		color: 'red',
		fontSize: 20,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#fffaf7',
	},

	headingText: {
		fontSize: 17,
		fontFamily: 'rubik',
		color: Colors.Texts.fifth,
	},
});

export default PersonalDetails;
