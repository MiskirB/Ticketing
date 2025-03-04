import { useEffect, useState } from "react";
import axios from "axios";

function UserDashboard() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("/api/tickets", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(response.data);
      } catch (err) {
        setError("Failed to fetch tickets");
      }
    };

    fetchTickets();
  }, []);

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "/api/tickets",
        { ticket: newTicket },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTickets((prevTickets) => [...prevTickets, response.data]);
      setNewTicket(""); // Reset input field
    } catch (err) {
      setError("Failed to create ticket");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">User Dashboard</h1>

      <div className="mt-4">
        <h2>Your Tickets</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>{ticket.ticket}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2>Create a New Ticket</h2>
        <form onSubmit={handleCreateTicket}>
          <input
            type="text"
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
            placeholder="Enter ticket description"
            className="p-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="p-2 text-white bg-blue-500 rounded">
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserDashboard;
