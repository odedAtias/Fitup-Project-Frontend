// Modules imports
const mongoose = require('mongoose');
const Joi = require('joi');

const Trainee = mongoose.model(
	'Trainee',
	new mongoose.Schema({
		userId: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			min: 2,
			max: 20,
			required: true,
		},
		lastName: {
			type: String,
			min: 2,
			max: 20,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			lowercase: true,
			required: true,
		},
		registeredEvents: {
			type: [mongoose.Schema.Types.ObjectId],
			default: [],
			ref: 'Event',
		},
		favoriteTrainers: {
			type: [mongoose.Schema.Types.ObjectId],
			default: [],
			ref: 'Trainers',
		},
		image: {
			type: String,
			default: '',
		},
	})
);

const validateTrainee = trainee => {
	const schema = Joi.object({
		firstName: Joi.string().min(2).required(),
		lastName: Joi.string().min(2).required(),
		email: Joi.string().email({ minDomainSegments: 2 }).required(),
		registeredEvents: Joi.array().default([]),
		favoriteTrainers: Joi.array().default([]),
		image: Joi.string().min(0),
	});
	return schema.validate(trainee);
};

exports.Trainee = Trainee;
exports.validate = validateTrainee;
