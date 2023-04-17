// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { Text, View, StyleSheet } from 'react-native';

// Context's imports
import { TraineeContext } from '../../store/TraineeContext';

// Custom components imports
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import Title from '../../Components/UI/Title';
import TraineeMetrics from '../../Components/TraineeSide/PesonalDetailsOutput/TraineeMetrics';

// Constants
import Colors from './../../Constants/Colors';
import CategoryHorizontalList from '../../Components/TraineeSide/PesonalDetailsOutput/CategoryHorizontalList';

// PersonalDetails Component
const PersonalDetails = () => {
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
			<TraineeMetrics height={1.78} weight={78} />
			<Text style={styles.discover}>
				Discover new fitness events & trainings
			</Text>
			<CategoryHorizontalList />
		</View>
	);
};

const styles = StyleSheet.create({
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

	discover: {
		marginBottom: 10,
		fontSize: 20,
	},
});

export default PersonalDetails;
