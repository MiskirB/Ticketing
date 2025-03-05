import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  // Fetch tickets on component mount
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "https://ticketing-jlk8.onrender.com/api/tickets",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTickets(response.data);
      } catch (err) {
        setError("Failed to fetch tickets. Please try again.");
      }
    };

    fetchTickets();
  }, []);

  // Handle ticket creation
  const handleCreateTicket = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://ticketing-jlk8.onrender.com/api/tickets",
        { title: newTicket.title, description: newTicket.description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTickets((prevTickets) => [...prevTickets, response.data]);
      setNewTicket({ title: "", description: "" }); // Reset input fields
    } catch (err) {
      setError("Failed to create ticket. Please try again.");
    }
  };

  // Handle sign-out
  const handleSignOut = () => {
    navigate("/signout");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>

      {role === "Admin" ? (
        <AdminPanel tickets={tickets} error={error} />
      ) : (
        <UserPanel
          tickets={tickets}
          newTicket={newTicket}
          setNewTicket={setNewTicket}
          handleCreateTicket={handleCreateTicket}
          error={error}
        />
      )}
    </div>
  );
}

// Admin Panel Component
function AdminPanel({ tickets, error }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">All Tickets</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-2">
        {tickets.map((ticket) => (
          <li key={ticket._id} className="p-2 bg-gray-100 rounded mb-2">
            <strong>{ticket.title}</strong>: {ticket.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

// User Panel Component
function UserPanel({
  tickets,
  newTicket,
  setNewTicket,
  handleCreateTicket,
  error,
}) {
  return (
    <>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Tickets</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="mt-2">
          {tickets.map((ticket) => (
            <li key={ticket._id} className="p-2 bg-gray-100 rounded mb-2">
              <strong>{ticket.title}</strong>: {ticket.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Create a New Ticket</h2>
        <form onSubmit={handleCreateTicket} className="mt-2">
          <input
            type="text"
            value={newTicket.title}
            onChange={(e) =>
              setNewTicket({ ...newTicket, title: e.target.value })
            }
            placeholder="Enter ticket title"
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <textarea
            value={newTicket.description}
            onChange={(e) =>
              setNewTicket({ ...newTicket, description: e.target.value })
            }
            placeholder="Enter ticket description"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="p-2 text-white bg-violet-500 rounded hover:bg-violet-600 transition-colors"
          >
            Create Ticket
          </button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
