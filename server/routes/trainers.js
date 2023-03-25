// Express modules imports
const express = require("express");
const router = express.Router();

// Custom modules & API imports
const { Trainer, validate } = require("../models/trainer");

// Create Methods
router.post("/", async (req, res) => {
  const trainerData = req.body;

  //Check if the request is legal
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let trainer = new Trainer(trainerData);
  trainer = await trainer.save();
  res.send(trainer);
});

// Read Methods // Checks if the handle the sameID before countinue
router.get("/:id", async (req, res) => {
  const trainer = await Trainer.findById(req.params.id).populate({
    path: "events",
    select: "_id category date hour city address participants maxParticipants",
  });
  if (!trainer)
    return res.status(404).send("The trainer with the given ID was not found.");
  res.send(trainer); // Check if to return trainer and user after finding by the id
});

router.put("/:id", async (req, res) => {
  // Check the request
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const trainer = await Trainer.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      description: req.body.description,
    },
    {
      new: true,
    }
  );
  if (!trainer)
    return res.status(404).send("The event with the given ID was not found.");
  res.send(trainer);
});

// Handling delete method
router.delete("/:id", async (req, res) => {
  const trainer = await Trainer.findByIdAndRemove(req.params.id);
  if (!trainer)
    return res.status(404).send("The trainer with the given ID was not found.");
  // Remove from fireBase too
  res.send(trainer);
});

module.exports = router;
