const express = require("express");

const { signup, login } = require("../controllers/auth");

const router = express.Router();

router.post("/signup");
router.post("/login");
