export const adjustEvent = event => {
	const updatedEvent = { ...event };
	updatedEvent.participants = event.participants.map(p => p._id);
	updatedEvent.trainer = event.trainer._id;
	delete updatedEvent._id;
	delete updatedEvent.__v;
	return updatedEvent;
};
