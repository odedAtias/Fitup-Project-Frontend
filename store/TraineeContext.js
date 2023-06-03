// React Hooks & API imports
import {createContext, useReducer} from 'react';

// The shared state schema
export const TraineeContext = createContext({
	trainee: {},
	registeredEvents: [],
	favoriteTrainers: [],
	// Handlers
	setTrainee: trainee => {},
	setRegisteredEvents: events => {},
	setFavoriteTrainers: trainers => {},
});

// The reducer of the store
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TRAINEE':
			return {...state, trainee: action.payload};
		case 'SET_REGISTERED_EVENTS':
			return {...state, registeredEvents: action.payload};
		case 'SET_FAVORITE_TRAINERS':
			return {...state, favoriteTrainers: action.payload};
		default:
			return state;
	}
};

// The context provider of the store
const TraineeContextProvider = ({children}) => {
	// reducer initialize
	const [state, dispatch] = useReducer(reducer, {
		trainee: {},
		registeredEvents: [],
		favoriteTrainers: [],
	});

	// store handlers
	const setTrainee = trainee =>
		dispatch({type: 'SET_TRAINEE', payload: trainee});

	const setRegisteredEvents = registeredEvents =>
		dispatch({type: 'SET_REGISTERED_EVENTS', payload: registeredEvents});

	const setFavoriteTrainers = favoriteTrainers =>
		dispatch({type: 'SET_FAVORITE_TRAINERS', payload: favoriteTrainers});

	// Connecting the store to the context provider
	const value = {
		trainee: state.trainee,
		registeredEvents: state.registeredEvents,
		favoriteTrainers: state.favoriteTrainers,
		setTrainee: setTrainee,
		setRegisteredEvents: setRegisteredEvents,
		setFavoriteTrainers: setFavoriteTrainers,
	};

	return (
		<TraineeContext.Provider value={value}>{children}</TraineeContext.Provider>
	);
};

export default TraineeContextProvider;
