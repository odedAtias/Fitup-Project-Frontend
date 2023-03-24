// Modules imports
const mongoose = require("mongoose");

const Trainer = mongoose.model(
  "Trainer",
  new mongoose.Schema({
    description: String,
    events: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Event",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  })
);

exports.Trainer = Trainer;
