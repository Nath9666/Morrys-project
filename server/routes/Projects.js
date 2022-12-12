const express = require("express");
const router = express.Router();
const { Projects } = require("../models");

router.get("/", async (req, res) => {
  const listofProjects = await Projects.findAll();
  res.json(listofProjects);
});

router.post("/", async (req, res) => {
  const project = req.body;
  await Projects.create(project);
  res.json(project);
});

module.exports = router;
