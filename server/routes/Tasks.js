const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");

router.get("/", async (req, res) => {
  const listOfTasks = await Tasks.findAll();
  res.json(listOfTasks);
});

router.get("/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  const tasks = await Tasks.findAll({
    where: {
      ProjectId: projectId,
    },
  });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = req.body;
  await Tasks.create(task);
  res.json(task);
});

module.exports = router;
