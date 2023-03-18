// Express modules imports
const express = require('express');
const router = express.Router();

// Custom modules & API imports
const { Event, validate } = require('../models/event');

// GET Methods

router.get('/', async (req, res) => {
	const events = await Event.find();
	res.send(events);
});

router.get('/:id', async (req, res) => {
	const event = await Event.findById(req.params.id);
	if (!event)
		return res.status(404).send('The event with the given ID was not found.');
	res.send(event);
});

// POST Methods

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	let event = new Event({
		name: req.body.name,
		date: req.body.date,
		hour: req.body.hour,
		address: req.body.adress,
		city: req.body.city,
		participants: req.body.participants,
		maxParticipants: req.body.maxParticipants,
		description: req.body.description,
	});
	res.send(event);
});

// PUT Methods

router.put('/:id', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const event = await Event.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			date: req.body.date,
			hour: req.body.hour,
			address: req.body.adress,
			city: req.body.city,
			participants: req.body.participants,
			maxParticipants: req.body.maxParticipants,
			description: req.body.description,
		},
		{
			new: true,
		}
	);

	if (!event)
		return res.status(404).send('The event with the given ID was not found.');

	res.send(event);
});

// DELETE Methods

router.delete('/:id', async (req, res) => {
	const event = await Event.findByIdAndRemove(req.params.id);
	if (!event)
		return res.status(404).send('The event with the given ID was not found.');
	res.send(event);
});

module.exports = router;
