const express = require("express");
const { getProtectedData } = require("../controllers/protectedController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/protected", verifyToken, getProtectedData);

module.exports = router;
