const express = require("express");
const router = express.Router();
const validateToken = require("../middlewares/validate-token");
const EventModel = require("../models/event-model");

router.post("/create-event", validateToken, async (req, res) => {
  try {
    const event = await EventModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Event created successfully", event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/edit-event/:id", validateToken, async (req, res) => {
  try {
    const event = await EventModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({ message: "Event updated successfully", event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/delete-event/:id", validateToken, async (req, res) => {
  try {
    await EventModel.findByIdAndDelete(req.params.id);
    return res.json({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/get-events", validateToken, async (req, res) => {
  try {
    const events = await EventModel.find();
    return res.json({ data: events });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/get-event/:id", validateToken, async (req, res) => {
  try {
    const event = await EventModel.findById(req.params.id0);
    return res.json({ data: event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
