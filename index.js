require("dotenv").config();
const express = require("express");
const supabase = require("./src/config/supabase"); // ✅ FIX 1: IMPORT SUPABASE

const app = express();
app.use(express.json());

// Debug: try loading routes safely
console.log("Loading routes...");

let authRoutes;
let protectedRoutes;
let attendanceRoutes;
let recruitmentRoutes;
let onboardingRoutes;
let candidatesRoutes;
let jobOpeningRoutes;


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

try {
  attendanceRoutes = require("./src/routes/attendanceRoutes.js");
  console.log("✅ Attendance routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading attendance routes:", err);
}

try {
  recruitmentRoutes = require("./src/routes/recruitmentRoutes.js");
  console.log("✅ Recruitment routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading recruitment routes:", err);
}

try {
  onboardingRoutes = require("./src/routes/onboardingRoutes.js");
  console.log("✅ Onboarding routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading onboarding routes:", err);
}

try {
  candidatesRoutes = require("./src/routes/candidatesRoutes.js");
  console.log("✅ Candidates routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading candidates routes:", err);
}

try {
  jobOpeningRoutes = require("./src/routes/jobOpeningRoutes.js");
  console.log("✅ Job Openings routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading job openings routes:", err);
}



/* ✅ ✅ ✅ SUPABASE REALTIME LISTENER */
supabase
  .channel("attendance-realtime")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "attendance_logs" },
    payload => {
      console.log("🔴 REALTIME UPDATE:", payload);
    }
  )
  .subscribe();

/* ✅ Default route */
app.get("/", (req, res) => {
  res.send("Hello from FigoERP backend!");
});



console.log("TYPES:");
console.log("authRoutes:", typeof authRoutes);
console.log("protectedRoutes:", typeof protectedRoutes);
console.log("attendanceRoutes:", typeof attendanceRoutes);
console.log("recruitmentRoutes:", typeof recruitmentRoutes);
console.log("onboardingRoutes:", typeof onboardingRoutes);
console.log("candidatesRoutes:", typeof candidatesRoutes);



/* ✅ Register routes ONLY if loaded */
if (authRoutes) app.use("/api", authRoutes);
if (protectedRoutes) app.use("/api", protectedRoutes);
if (attendanceRoutes) app.use("/api/attendance", attendanceRoutes);
if (recruitmentRoutes) app.use("/api/recruitment", recruitmentRoutes);
if (onboardingRoutes) app.use("/api/onboarding", onboardingRoutes);
if (candidatesRoutes) app.use("/api/candidates", candidatesRoutes);
if (jobOpeningRoutes) app.use("/api/job-openings", jobOpeningRoutes);





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
