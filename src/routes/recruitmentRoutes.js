const express = require("express");
const router = express.Router();

const getRecruitmentPipeline = require("../controllers/recruitmentController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", verifyToken, getRecruitmentPipeline);

module.exports = router;
