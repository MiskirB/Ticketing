import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication data from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");

    // Redirect to the sign-in page
    navigate("/signin");
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default SignOut;
