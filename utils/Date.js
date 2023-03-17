const displayHour = hour => {
	const hourPrefix = Number(hour.slice(0, 2));
	return hourPrefix >= 12 ? `${hour} pm` : `${hour} am`;
};

export const displayFullDate = (date, hour) => {
	return `${date}, ${displayHour(hour)}`;
};

export const sortedEventsByDate = events => {
	return events.sort((a, b) => {
		const dateA = new Date(`${a.date} ${a.hour}:00`);
		const dateB = new Date(`${b.date} ${b.hour}:00`);
		// Compare by date first
		if (dateA < dateB) {
			return -1;
		}
		if (dateA > dateB) {
			return 1;
		}
		// If dates are the same, compare by hour
		if (a.hour < b.hour) {
			return -1;
		}
		if (a.hour > b.hour) {
			return 1;
		}
		// If both date and hour are the same, return 0
		return 0;
	});
};
