// Modules imports
const mongoose = require("mongoose");

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
    // TrainerImg: { --> url link to image
    //   type: String,
    // },
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
    password: Joi.string()
      .min(6)
      .max(13)
      .required(),
    events: Joi.array().default([]),
    description: Joi.string()
      .min(10)
      .max(50),
  });
  return schema.validateTrainer(trainer);
};

exports.validate = validateTrainer;
exports.Trainer = Trainer;
