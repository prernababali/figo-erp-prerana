const express = require("express");
const {
  signupUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

console.log("📍 Loaded functions:", {
  signupUser: typeof signupUser,
  loginUser: typeof loginUser,
  forgotPassword: typeof forgotPassword,
  resetPassword: typeof resetPassword
});

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Auth route working!");
});

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
