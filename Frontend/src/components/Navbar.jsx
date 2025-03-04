import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-violet-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signin" className="hover:text-gray-400">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-gray-400">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/user-dashboard" className="hover:text-gray-400">
            User Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard" className="hover:text-gray-400">
            Admin Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
