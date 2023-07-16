export function filterEventsByCity(events, city) {
	const filteredEvents = events.filter(event =>
		event.city.toLowerCase().includes(city.toLowerCase())
	);
	return filteredEvents;
}
