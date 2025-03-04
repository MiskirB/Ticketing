const Ticket = require("../models/Ticket");

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTicket = new Ticket({
      title,
      description,
      createdBy: req.user.id,
    });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    console.error("Error creating ticket:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get tickets based on the user's role
exports.getTickets = async (req, res) => {
  try {
    let tickets;

    if (req.user.role === "Admin") {
      // Admin can see all tickets
      tickets = await Ticket.find().populate("createdBy", "username");
    } else {
      // Regular users can only see their own tickets
      tickets = await Ticket.find({ createdBy: req.user.id }).populate(
        "createdBy",
        "username"
      );
    }

    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
