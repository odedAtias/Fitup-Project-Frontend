export const validateDropdownInput = (list, value) => list.includes(value);

export const validateDate = value => {
	let [day, month, year] = value.split('/').map(Number);
	let [inputDate, today] = [new Date(year, month - 1, day), new Date()];
	today.setHours(0, 0, 0, 0);
	return inputDate >= today;
};

export const validateHour = value => {
	const [hours, minutes] = value.split(':').map(Number);
	return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
};
