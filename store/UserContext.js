// React Hooks & API imports
import { createContext, useReducer } from 'react';

// The shared state shcema
export const UserContext = createContext({
	// Properties
	email: '',
	firstName: '',
	lastName: '',
	image: '',
	// Handlers
	setEmail: email => {},
	setFirstName: firstName => {},
	setLastName: lastName => {},
	setImage: image => {},
});

// The reducer of the store
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_EMAIL':
			return { ...state, email: action.payload };
		case 'SET_FIRST_NAME':
			return { ...state, firstName: action.payload };
		case 'SET_LAST_NAME':
			return { ...state, lastName: action.payload };
		case 'SET_IMAGE':
			return { ...state, image: action.payload };
		default:
			return state;
	}
};

// The context provider of the store
const UserContextProvider = ({ children }) => {
	// reducer initialize
	const [state, dispatch] = useReducer(reducer, {});
	// user handlers
	const setEmail = email => dispatch({ type: 'SET_EMAIL', payload: email });

	const setFirstName = firstName =>
		dispatch({ type: 'SET_FIRST_NAME', payload: firstName });

	const setLastName = lastName =>
		dispatch({ type: 'SET_LAST_NAME', payload: lastName });

	const setImage = lastName =>
		dispatch({ type: 'SET_IMAGE', payload: lastName });

	// Connecting the store to the context provider
	const value = {
		email: state.email,
		firstName: state.firstName,
		lastName: state.lastName,
		image: state.image,
		setEmail: setEmail,
		setFirstName: setFirstName,
		setLastName: setLastName,
		setImage: setImage,
	};
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
