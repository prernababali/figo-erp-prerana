const express = require("express");
const router = express.Router();

const { getLiveAttendanceStats } = require("../controllers/attendanceController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/live", verifyToken, getLiveAttendanceStats);

module.exports = router;
