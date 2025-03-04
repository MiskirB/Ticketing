import React, { useState } from "react";
import axios from "axios";

function CreateTicket({ onTicketCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "/api/tickets",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Ticket created successfully!");
      setTitle("");
      setDescription("");
      onTicketCreated(); // Refresh the ticket list
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create ticket.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Create New Ticket</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
}

export default CreateTicket;
