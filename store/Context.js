import { createContext, useReducer } from 'react';

// The shared state schema
export const Context = createContext({
	users: [],
	trainers: [],
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
});

const reducer = (state, action) => {
	switch (action.type) {
		case 'SetEvents':
			return { ...state, events: action.payload };
		case 'SetFavoriteTrainers':
			return { ...state, favoriteTrainers: action.payload };
		case 'SetCategories':
			return { ...state, categories: action.payload };
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

	const value = {
		// Trainee values
		events: state.events,
		setEvents: setEvents,
		favoriteTrainers: state.favoriteTrainers,
		setFavoriteTrainers: setFavoriteTrainers,
		categories: state.categories,
		setCategories: setCategories,
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
