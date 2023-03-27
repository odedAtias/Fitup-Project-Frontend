// Express modules imports
const express = require('express');
const router = express.Router();

// Custom modules & API imports
const { Trainee, validate } = require('../models/trainee');

// Create Methods
router.post('/', async (req, res) => {
	const traineeData = req.body;

	//Check if the request is legal
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let trainee = new Trainee(traineeData);
	trainee = await trainee.save();
	res.send(trainee);
});

// Read Methods // Checks if the handle the sameID before countinue
router.get('/:id', async (req, res) => {
	const trainee = await Trainee.findById(req.params.id)
		.populate({
			// For thr registered events list
			path: 'registeredEvents',
			select: '_id category date hour city address',
		})
		.populate({
			path: 'favoriteTrainers',
			select: '_id firstName lastName image',
		});
	if (!trainee)
		return res.status(404).send('The trainee with the given ID was not found.');
	res.send(trainee);
});

router.put('/:id', async (req, res) => {
	// Check the request
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const trainee = await Trainee.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	if (!trainee)
		return res.status(404).send('The event with the given ID was not found.');
	res.send(trainee);
});

// Handling delete method
router.delete('/:id', async (req, res) => {
	const trainee = await Trainee.findByIdAndRemove(req.params.id);
	if (!trainee)
		return res.status(404).send('The trainee with the given ID was not found.');
	// TODO: Remove from fireBase too
	res.send(trainee);
});

module.exports = router;
