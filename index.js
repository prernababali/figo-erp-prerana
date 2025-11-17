require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// Debug: try loading routes safely
console.log("Loading routes...");

let authRoutes;
let protectedRoutes;

try {
  authRoutes = require("./src/routes/authRoutes.js");
  console.log("✅ Auth routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading auth routes:", err);
}

try {
  protectedRoutes = require("./src/routes/protectedRoutes.js");
  console.log("✅ Protected routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading protected routes:", err);
}

// Default route
app.get("/", (req, res) => {
  res.send("Hello from FigoERP backend!");
});

// Register routes ONLY if loaded
if (authRoutes) {
  app.use("/api", authRoutes);
}

if (protectedRoutes) {
  app.use("/api", protectedRoutes);
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
