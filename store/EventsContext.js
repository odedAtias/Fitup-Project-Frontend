// React Hooks & API imports
import { createContext, useState } from 'react';

// The shared state schema
export const EventsContext = createContext({
	events: [],
	// Handlers
	setEvents: events => {},
});

// The context provider of the store
const EventsContextProvider = ({ children }) => {
	const [events, setEvents] = useState([]);
	// Connecting the store to the context provider
	const value = {
		events: events,
		setEvents: setEvents,
	};

	return (
		<EventsContext.Provider value={value}>{children}</EventsContext.Provider>
	);
};

export default EventsContextProvider;
