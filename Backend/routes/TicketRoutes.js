// routes/ticketRoutes.js
const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const { authenticateToken, isAdmin } = require("../middlewares/authMiddleware");

// Create a new ticket
router.post("/", authenticateToken, ticketController.createTicket);

// Get all tickets
router.get("/", authenticateToken, ticketController.getTickets);

// Additional routes can be added as needed

module.exports = router;
