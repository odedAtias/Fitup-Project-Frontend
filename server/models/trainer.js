// Modules imports
const Joi = require('joi');
const mongoose = require('mongoose');

const Trainer = mongoose.model(
	'Trainer',
	new mongoose.Schema({
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			default: 3,
		},
		description: String,
		events: {
			type: [mongoose.Schema.Types.ObjectId],
			default: [],
			ref: 'Event',
		},
	})
);

const validateTrainer = trainer => {
	const schema = Joi.object({
		firstName: Joi.string().min(1).required(),
		lastName: Joi.string().min(2).required(),
		email: Joi.string().email({ minDomainSegments: 2 }).required(),
		rating: Joi.number().default(3),
		description: Joi.string().min(10).max(90),
		events: Joi.array().default([]),
		// feedbacks: Joi.array().default([]),
	});
	return schema.validate(trainer);
};

exports.Trainer = Trainer;
exports.validate = validateTrainer;
