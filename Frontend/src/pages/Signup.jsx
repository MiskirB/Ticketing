// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//     role: "User",
//   });
//   const [message, setMessage] = useState({ type: "", content: "" });
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);
//       setMessage({
//         type: "success",
//         content: "Signup successful! Redirecting to login...",
//       });

//       // Redirect to Sign-in page after 2 seconds
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000);
//     } catch (error) {
//       setMessage({
//         type: "error",
//         content:
//           error.response?.data?.message || "Signup failed. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 bg-white rounded shadow-md w-full max-w-md"
//       >
//         <h2 className="mb-4 text-xl font-semibold text-center">Sign Up</h2>
//         {message.content && (
//           <p
//             className={`mb-4 text-center ${
//               message.type === "error" ? "text-red-500" : "text-green-500"
//             }`}
//           >
//             {message.content}
//           </p>
//         )}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Username"
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full p-2 text-white bg-violet-500 rounded"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "User",
  });
  const [message, setMessage] = useState({ type: "", content: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setMessage({
        type: "success",
        content: "Signup successful! Redirecting to login...",
      });

      // Redirect to Sign-in page after 2 seconds
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        content:
          error.response?.data?.message || "Signup failed. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        {/* TicketMaster Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-violet-600">TicketMaster</h1>
          <p className="text-lg text-gray-600 mt-2">Your Ticketing Solution</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-xl font-semibold text-center">Sign Up</h2>
          {message.content && (
            <p
              className={`mb-4 text-center ${
                message.type === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message.content}
            </p>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full p-2 text-white bg-violet-500 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
