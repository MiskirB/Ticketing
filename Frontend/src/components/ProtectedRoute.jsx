import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAdmin }) {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("role");

  if (!token) {
    // User is not authenticated
    return <Navigate to="/signin" />;
  }

  if (isAdmin && role !== "admin") {
    // User is not authorized to access admin routes
    return <Navigate to="/user-dashboard" />;
  }

  // User is authenticated and authorized
  return <Outlet />;
}

export default ProtectedRoute;
