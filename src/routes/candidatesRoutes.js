const express = require("express");
const router = express.Router();

const { getRecentCandidates } = require("../controllers/candidatesController");
const { verifyToken } = require("../middleware/authMiddleware");

// ✅ Recent Candidates Table API
router.get("/recent", verifyToken, getRecentCandidates);

module.exports = router;
