// TicketCreationForm.js
import React, { useState } from "react";
import axios from "axios";

function TicketCreationForm({ onTicketCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/tickets",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onTicketCreated(response.data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Ticket</h3>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  );
}

export default TicketCreationForm;
