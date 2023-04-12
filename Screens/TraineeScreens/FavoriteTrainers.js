// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { Text, View, StyleSheet } from 'react-native';

// Context import
import { TraineeContext } from './../../store/TraineeContext';

// Custom components imports
import FavoriteTrainersList from '../../Components/TraineeSide/FavoriteTrainersOutput/FavoriteTrainersList';

// Constants
import Colors from '../../Constants/Colors';

// FavoriteTrainers Component
const FavoriteTrainers = () => {
	// Context initialize
	const context = useContext(TraineeContext);

	if (context.favoriteTrainers.length === 0 || !context.favoriteTrainers) {
		return (
			<View style={styles.conainer}>
				<Text style={styles.headingText}>Not have favorite trainers yet</Text>
			</View>
		);
	}

	return <FavoriteTrainersList favoriteTrainers={context.favoriteTrainers} />;
};

const styles = StyleSheet.create({
	conainer: {
		height: '90%',
		justifyContent: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 25,
		textAlign: 'center',
		color: Colors.Texts.primary,
	},
});

export default FavoriteTrainers;
