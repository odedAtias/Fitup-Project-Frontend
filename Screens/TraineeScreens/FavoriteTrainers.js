// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { Text } from 'react-native';

// Context import
import { TraineeContext } from './../../store/TraineeContext';

// Custom components imports
import FavoriteTrainersList from '../../Components/TraineeSide/FavoriteTrainersOutput/FavoriteTrainersList';

// FavoriteTrainers Component
const FavoriteTrainers = () => {
	// Context initialize
	const context = useContext(TraineeContext);

	if (context.favoriteTrainers.length === 0 || !context.favoriteTrainers) {
		return <Text>Dont have trainers yet ...</Text>;
	}

	return <FavoriteTrainersList favoriteTrainers={context.favoriteTrainers} />;
};

export default FavoriteTrainers;
