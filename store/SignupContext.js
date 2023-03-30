// React Hooks & API imports
import { createContext, useReducer } from 'react';

// The shared state shcema
export const SignupContext = createContext({
	// Properties
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	confirmPassword: '',
	type: '',

	// Handlers
	setEmail: email => {},
	setFirstName: firstName => {},
	setLastName: lastName => {},
	setPassword: password => {},
	setConfirmPassword: password => {},
	setType: type => {},
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
		case 'SET_PASSWORD':
			return { ...state, password: action.payload };
		case 'SET_CONFIRM_PASSWORD':
			return { ...state, confirmPassword: action.payload };
		case 'SET_TYPE':
			return { ...state, type: action.payload };
		default:
			return state;
	}
};

// The context provider of the store
const SignupContextProvider = ({ children }) => {
	// reducer initialize
	const [state, dispatch] = useReducer(reducer, {});

	// store handlers
	const setEmail = email => dispatch({ type: 'SET_EMAIL', payload: email });

	const setFirstName = firstName =>
		dispatch({ type: 'SET_FIRST_NAME', payload: firstName });

	const setLastName = lastName =>
		dispatch({ type: 'SET_LAST_NAME', payload: lastName });

	const setPassword = lastName =>
		dispatch({ type: 'SET_PASSWORD', payload: lastName });

	const setConfirmPassword = lastName =>
		dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: lastName });

	const setType = type => dispatch({ type: 'SET_TYPE', payload: type });

	// Connecting the store to the context provider
	const value = {
		email: state.email,
		firstName: state.firstName,
		lastName: state.lastName,
		password: state.password,
		confirmPassword: state.confirmPassword,
		type: state.type,
		setEmail: setEmail,
		setFirstName: setFirstName,
		setLastName: setLastName,
		setPassword: setPassword,
		setConfirmPassword: setConfirmPassword,
		setType: setType,
	};
	return (
		<SignupContext.Provider value={value}>{children}</SignupContext.Provider>
	);
};

export default SignupContextProvider;
