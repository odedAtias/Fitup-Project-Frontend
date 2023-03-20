// Express modules imports
const express = require('express');
const router = express.Router();

// Custom modules & API imports
const { Trainer, validate } = require('../models/trainer');

// Create Methods
router.post('/', async (req, res) => {
	const trainerData = req.body;
	// Case 400 checking
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let trainer = new Trainer(trainerData);
	trainer = await trainer.save();
	res.send(trainer);
});

// Read Methods
router.get('/:id', async (req, res) => {
	const trainer = await Trainer.findById(req.params.id).populate({
		path: 'events',
		select: '_id category date hour city address participants maxParticipants',
	});
	if (!trainer)
		return res.status(404).send('The trainer with the given ID was not found.');
	res.send(trainer);
});

module.exports = router;
