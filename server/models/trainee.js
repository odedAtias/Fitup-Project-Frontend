// Modules imports
const mongoose = require("mongoose");

const Trainee = mongoose.model(
  "Trainee",
  new mongoose.Schema({
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  })
);

exports.Trainee = Trainee;
