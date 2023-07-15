export const validateDropdownInput = (list, value) => list.includes(value);

export const validatePattern = (value, pattern) => pattern.test(value);

export const validateDateHour = (date, hour) => {
	const [day, month, year] = date.split('/').map(Number);
	const [hours, minutes] = hour.split(':').map(Number);

	const futureDateTime = Date.now() + 6 * 60 * 60 * 1000;
	const selectedDateTime = new Date(
		year,
		month - 1,
		day,
		hours,
		minutes
	).getTime();

	return selectedDateTime > futureDateTime;
};

export const validateLegalTiming = (date, hour, duration, events) => {
	const newEventStartTime = new Date(`${date} ${hour}`);
	const newEventEndTime = new Date(
		newEventStartTime.getTime() + duration * 60000
	);
	const maxEventDuration = 90; // Maximum event duration in minutes

	if (duration > maxEventDuration) return false; // Duration exceeds the allowed limit

	if (!events || events.length === 0) return true;

	return !events.some(event => {
		const existingEventStartTime = new Date(`${event.date} ${event.hour}`);
		const existingEventEndTime = new Date(
			existingEventStartTime.getTime() + event.duration * 60000
		);

		return (
			(newEventStartTime >= existingEventStartTime &&
				newEventStartTime < existingEventEndTime) ||
			(newEventEndTime > existingEventStartTime &&
				newEventEndTime <= existingEventEndTime)
		);
	});
};

export const validateNumber = (value, zeroIsLegal) =>
	typeof value === 'number' &&
	!isNaN(value) &&
	(!zeroIsLegal ? value > 0 : true);
