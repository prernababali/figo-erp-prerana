const express = require("express");
const {
  signupUser,
  loginUser,
  forgotPassword,
 
} = require("../controllers/authController");

console.log("📍 Loaded functions:", {
  signupUser: typeof signupUser,
  loginUser: typeof loginUser,
  forgotPassword: typeof forgotPassword,

});

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Auth route working!");
});

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);


module.exports = router;
