import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });

      // Assuming the response contains a token and user role
      const { token, role } = response.data;

      // Store the token and role in local storage
      localStorage.setItem("authToken", token);
      localStorage.setItem("role", role);

      // Redirect to the appropriate dashboard based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "user") {
        navigate("/user-dashboard");
      } else {
        navigate("/dashboard"); // Default fallback, in case of unrecognized role
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Sign-in failed. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Navigate to home page
  const goToHomePage = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        {/* TicketMaster Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-violet-600">TicketMaster</h1>
          <p className="text-lg text-gray-600 mt-2">Your Ticketing Solution</p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-xl font-semibold text-center">Sign In</h2>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 text-white bg-violet-500 rounded hover:bg-violet-600 transition-colors"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Home Page Button */}
          <button
            type="button"
            onClick={goToHomePage}
            className="w-full p-2 mt-4 text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
          >
            Go to Home Page
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // Add loading state
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true); // Set loading to true when the form is submitted

//     try {
//       const response = await axios.post("/api/auth/signin", {
//         email,
//         password,
//       });

//       // Assuming the response contains a token and user role
//       const { token, role } = response.data;

//       // Store the token and role in local storage
//       localStorage.setItem("authToken", token);
//       localStorage.setItem("role", role);

//       // Redirect to the appropriate dashboard based on role
//       if (role === "admin") {
//         navigate("/admin-dashboard");
//       } else if (role === "user") {
//         navigate("/user-dashboard");
//       } else {
//         navigate("/dashboard"); // Default fallback, in case of unrecognized role
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Sign-in failed. Please try again."
//       );
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   // Navigate to home page
//   const goToHomePage = () => {
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
//         <h2 className="mb-4 text-xl font-semibold text-center">Sign In</h2>
//         {error && <p className="mb-4 text-red-500">{error}</p>}
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full p-2 text-white bg-violet-500 rounded hover:bg-violet-600 transition-colors"
//           disabled={loading} // Disable the button when loading
//         >
//           {loading ? "Signing In..." : "Sign In"}
//         </button>

//         {/* Home Page Button */}
//         <button
//           type="button"
//           onClick={goToHomePage}
//           className="w-full p-2 mt-4 text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
//         >
//           Go to Home Page
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
