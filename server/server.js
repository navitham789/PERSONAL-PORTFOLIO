const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
// Middleware
app.use(express.json());
// Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
