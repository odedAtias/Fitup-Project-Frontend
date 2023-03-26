// Modules imports
const mongoose = require("mongoose");

const Trainee = mongoose.model(
  "Trainee",
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
    registeredEvents: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Event",
    },
    favoriteTrainers: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Trainers",
    },
    // TraineeImg: { --> url link to image
    //   type: String,
    // },
  })
);

const validateTrainee = (trainer) => {
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
    registeredEvents: Joi.array().default([]),
    favoriteTrainers: Joi.array().default([]),
  });
  return schema.validateTrainee(trainer);
};

exports.Trainee = Trainee;
exports.validate = validateTrainee;
