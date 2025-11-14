require("dotenv").config();
const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const protectedRoutes = require("./src/routes/protectedRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from FigoERP backend!");
});

app.use(authRoutes);
app.use(protectedRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
