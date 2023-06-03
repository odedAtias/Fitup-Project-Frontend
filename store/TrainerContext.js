// React Hooks & API imports
import {createContext, useReducer} from 'react';

// The shared state schema
export const TrainerContext = createContext({
	trainer: {},
	events: [],
	// Handlers
	setTrainer: tainer => {},
	setEvents: evnets => {},
});

// The reducer of the store
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TRAINER':
			return {...state, trainer: action.payload};
		case 'SET_EVENTS':
			return {...state, events: action.payload};
		default:
			return state;
	}
};

// The context provider of the store
const TrainerContextProvider = ({children}) => {
	// reducer initialize
	const [state, dispatch] = useReducer(reducer, {
		trainer: {},
		events: [],
	});

	// store handlers
	const setTrainer = trainer =>
		dispatch({type: 'SET_TRAINER', payload: trainer});

	const setEvents = events => dispatch({type: 'SET_EVENTS', payload: events});

	const value = {
		trainer: state.trainer,
		events: state.events,
		setTrainer: setTrainer,
		setEvents: setEvents,
	};

	return (
		<TrainerContext.Provider value={value}>{children}</TrainerContext.Provider>
	);
};

export default TrainerContextProvider;
