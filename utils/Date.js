const displayHour = hour => {
	const hourPrefix = Number(hour.slice(0, 2));
	return hourPrefix >= 12 ? `${hour} pm` : `${hour} am`;
};

export const displayFullDate = (date, hour) => {
	return `${date}, ${displayHour(hour)}`;
};
