// Modules imports
const Joi = require('joi');
const mongoose = require('mongoose');

const Trainer = mongoose.model(
	'Trainer',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		events: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Event',
		},
	})
);

const validateTrainer = trainer => {
	const schema = Joi.object({
		name: Joi.string().min(1).required(),
		description: Joi.string().min(10).max(90).required(),
		events: Joi.array(),
	});
	return schema.validate(trainer);
};

exports.Trainer = Trainer;
exports.validate = validateTrainer;
