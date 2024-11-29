require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const vaccineRoutes = require("./routes/vaccineRoutes");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use routes
app.use("/users", userRoutes);
app.use("/vaccines", vaccineRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
