const express = require("express");
const router = express.Router();

const getOnboardingStats = require("../controllers/onboardingController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", verifyToken, getOnboardingStats);

module.exports = router;
