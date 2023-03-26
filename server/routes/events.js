// Express modules imports
const express = require("express");
const router = express.Router();

// Custom modules & API imports
const { Event, validate } = require("../models/event");
const { Trainer } = require("../models/trainer");

// Create Methods
router.post("/", async (req, res) => {
  const eventData = req.body;
  const trainerId = eventData.trainer;

  // Case 400 checking
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Case 404 checking
  let trainer = await Trainer.findById(trainerId);
  if (!trainer)
    return res.status(404).send("The trainer with the given ID was not found.");

  // Saving the event in events collection
  let event = new Event(eventData);
  event = await event.save();

  // Adding the new event to the events array of the relevant trainer
  trainer.events.push(event._id);
  trainer = await trainer.save();

  res.send(event);
});

// Read Methods
router.get("/", async (req, res) => {
  const events = await Event.find().populate("trainer", "firstName lastName");
  res.send(events);
});

router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event)
    return res.status(404).send("The event with the given ID was not found.");
  res.send(event);
});

// Update Methods
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      date: req.body.date,
      hour: req.body.hour,
      address: req.body.adress,
      city: req.body.city,
      participants: req.body.participants,
      maxParticipants: req.body.maxParticipants,
      description: req.body.description,
    },
    {
      new: true,
    }
  );

  if (!event)
    return res.status(404).send("The event with the given ID was not found.");

  res.send(event);
});

// Delete Methods
router.delete("/:id", async (req, res) => {
  const event = await Event.findByIdAndRemove(req.params.id);
  if (!event)
    return res.status(404).send("The event with the given ID was not found.");
  res.send(event);
});

module.exports = router;
