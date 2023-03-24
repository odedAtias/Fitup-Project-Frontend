// Modules imports
const Joi = require("joi");
const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    category: {
      type: String,
      required: true,
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    participants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Trainee",
      default: [],
    },
    maxParticipants: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
    },
  })
);

const validateEvent = (event) => {
  const schema = Joi.object({
    category: Joi.string()
      .min(3)
      .required(),
    trainer: Joi.string().required(),
    date: Joi.string()
      .length(10)
      .required(),
    hour: Joi.string()
      .length(5)
      .required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    maxParticipants: Joi.number().required(),
    description: Joi.string()
      .min(10)
      .max(50)
      .required(),
  });
  return schema.validate(event);
};

exports.Event = Event;
exports.validate = validateEvent;
