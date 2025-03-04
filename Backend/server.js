// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/TicketRoutes");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
// app.use(cors()); // Enable Cross-Origin Resource Sharing

// Replace this with the actual origin of your frontend app
const allowedOrigins = ["https://ticketing-kappa-orcin.vercel.app"];

const options = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Apply CORS middleware
app.use(cors(options));

// Your routes and other code here...

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing System API");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
