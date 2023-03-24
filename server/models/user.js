// Modules imports
const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
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
    password: {
      type: String,
      required: true,
    },
    // userImg: {
    //   type: String,
    // },
  })
);

const validateUser = (user) => {
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
  });
  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;
