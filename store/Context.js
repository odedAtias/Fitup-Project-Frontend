import { createContext, useReducer } from 'react';

// The shared state schema
export const Context = createContext({
	users: [],
	trainer: {},
	trainees: [],
	events: [],
	favoriteTrainers: [],
	categories: [],
	// Trainees handler functions
	setEvents: () => {},
	setCategories: () => {},
	registerEvent: eventId => {},
	cancelRegisterEvent: eventId => {},
	addFavoriteTrainer: trainerId => {},
	setTrainer: trainer => {},
});

const reducer = (state, action) => {
	switch (action.type) {
		case 'SetEvents':
			return { ...state, events: action.payload };
		case 'SetFavoriteTrainers':
			return { ...state, favoriteTrainers: action.payload };
		case 'SetCategories':
			return { ...state, categories: action.payload };
		case 'SetTrainer':
			return { ...state, trainer: action.payload };
		default:
			return state;
	}
};

// Context Provider
const ContextProvider = ({ children }) => {
	// reducer initialize
	const [state, dispatch] = useReducer(reducer, {});
	// trainees handlers
	const setEvents = events => dispatch({ type: 'SetEvents', payload: events });

	const setFavoriteTrainers = favoriteTrainers =>
		dispatch({ type: 'SetFavoriteTrainers', payload: favoriteTrainers });

	const setCategories = categories =>
		dispatch({ type: 'SetCategories', payload: categories });

	const setTrainer = trainer =>
		dispatch({ type: 'SetTrainer', payload: trainer });

	const value = {
		// Trainee values
		events: state.events,
		setEvents: setEvents,
		favoriteTrainers: state.favoriteTrainers,
		setFavoriteTrainers: setFavoriteTrainers,
		categories: state.categories,
		setCategories: setCategories,
		trainer: state.trainer,
		setTrainer: setTrainer,
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
