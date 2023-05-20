const displayHour = hour => {
	const hourPrefix = Number(hour.slice(0, 2));
	return hourPrefix >= 12 ? `${hour} pm` : `${hour} am`;
};

export const displayFullDate = (date, hour) => {
	return `${date}, ${displayHour(hour)}`;
};

export const sortedEventsByDate = events => {
	events.sort(function (a, b) {
		var dateA = new Date(a.date.split('/').reverse().join('/') + ' ' + a.hour);
		var dateB = new Date(b.date.split('/').reverse().join('/') + ' ' + b.hour);
		return dateA - dateB;
	});
	return events;
};
