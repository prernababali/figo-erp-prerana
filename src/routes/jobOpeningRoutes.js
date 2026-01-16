const express = require("express");
const router = express.Router();

const {
  createJobOpening,
  listJobOpenings
} = require("../controllers/jobOpenings.controller");

const { verifyToken } = require("../middleware/authMiddleware");

// CREATE (needs login)
router.post("/", verifyToken, createJobOpening);

// LIST (no auth needed for now)
router.get("/", listJobOpenings);

module.exports = router;
