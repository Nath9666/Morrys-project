const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");

router.get("/", async (req, res) => {
  const listOfTasks = await Tasks.findAll();
  res.json(listOfTasks);
});

router.post("/", async (req, res) => {
  const task = req.body;
  await Tasks.create(task);
  res.json(task);
});

module.exports = router;
