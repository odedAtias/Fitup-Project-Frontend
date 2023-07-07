const displayHour = hour => {
	const hourPrefix = Number(hour.slice(0, 2));
	return hourPrefix >= 12 ? `${hour} pm` : `${hour} am`;
};

export const displayFullDate = (date, hour) => {
	return `${date}, ${displayHour(hour)}`;
};

export const sortedEventsByDate = events => {
	events.sort(function (a, b) {
		const dateA = new Date(a.date.split('/').reverse().join('/') + ' ' + a.hour);
		const dateB = new Date(b.date.split('/').reverse().join('/') + ' ' + b.hour);
		return dateA - dateB;
	});
	return events;
};

export const getCurrentDate = () => {
	const currentDate = new Date();
	const day = String(currentDate.getDate()).padStart(2, '0');
	const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
	const year = currentDate.getFullYear();
	const formattedDate = `${day}/${month}/${year}`;
	return formattedDate;
};
