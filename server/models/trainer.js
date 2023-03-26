// Modules imports
const mongoose = require("mongoose");
const Joi = require("joi");

const Trainer = mongoose.model(
  "Trainer",
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
    description: {
      type: String,
      required: true,
    },
    events: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Event",
    },
    img: {
      type: String,
      default: "",
    },
  })
);
const validateTrainer = (trainer) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(1)
      .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    events: Joi.array().default([]),
    description: Joi.string()
      .min(10)
      .max(50),
    img: Joi.string().min(0),
  });
  return schema.validate(trainer);
};

exports.validate = validateTrainer;
exports.Trainer = Trainer;
