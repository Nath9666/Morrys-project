const express = require("express");
const router = express.Router();
const { Projects } = require("../models");

router.get("/", async (req, res) => {
  const listofProjects = await Projects.findAll();
  res.json(listofProjects);
});

router.get("/public", async (req, res) => {
  const listofProjectsPublic = await Projects.findAll({
    where: { Visibility: "public" },
  });
  res.json(listofProjectsPublic);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Projects.findByPk(id);
  res.json(project);
});

router.post("/", async (req, res) => {
  const project = req.body;
  await Projects.create(project);
  res.json(project);
});

module.exports = router;
