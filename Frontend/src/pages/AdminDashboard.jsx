import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("/api/tickets/all", {
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

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <div className="mt-4">
        <h2>All Tickets</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              {ticket.user}: {ticket.ticket}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
