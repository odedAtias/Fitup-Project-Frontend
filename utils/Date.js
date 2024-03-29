const displayHour = hour => {
	const hourPrefix = Number(hour.slice(0, 2));
	return hourPrefix >= 12 ? `${hour} pm` : `${hour} am`;
};

export const displayFullDate = (date, hour) => {
	return `${date}, ${displayHour(hour)}`;
};

export const sortedEventsByDate = events => {
	events.sort(function (a, b) {
		const dateA = new Date(
			a.date.split('/').reverse().join('/') + ' ' + a.hour
		);
		const dateB = new Date(
			b.date.split('/').reverse().join('/') + ' ' + b.hour
		);
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

export const getHour = value => {
	const date = new Date(value);
	const hour = ('0' + date.getUTCHours()).slice(-2); // Pad with leading zero if necessary
	const minutes = ('0' + date.getUTCMinutes()).slice(-2); // Pad with leading zero if necessary
	return hour + ':' + minutes;
};

export const getDate = value => {
	const currentDate = new Date(value);
	const day = String(currentDate.getDate()).padStart(2, '0');
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const year = currentDate.getFullYear();
	const formattedDate = `${day}/${month}/${year}`;
	return formattedDate;
};

export const isWithinNext7Days = dateStr => {
	const today = new Date();
	const dateParts = dateStr.split('/');
	const eventDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
	const timeDiff = eventDate.getTime() - today.getTime();
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return daysDiff >= 0 && daysDiff <= 7;
};
