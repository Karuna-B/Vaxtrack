import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { backendUrl } from "../App";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/admin", {
        username,
        password,
      });

      console.log(response)
      const data = await response.json();

      if (response.status===201) {
        localStorage.setItem("token", data.token);

        navigate("/overview");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="z-10 flex flex-col items-center w-[90%] sm:max-w-sm m-auto mt-16 gap-8 p-6 bg-white rounded-lg shadow-lg text-gray-900"
    >
      {/* Title Section */}
      <div className="inline-flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-4xl font-bold text-green-600">
          VAXTRACK
        </h1>
        <p className="text-sm">Login to access your Account</p>
      </div>

      {/* Form Inputs */}
      <input
        type="text"
        className="w-full px-4 py-3 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-4 py-3 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      {/* Forgot Password */}
      <div className="w-full text-right">
        <p className="text-sm  cursor-pointer hover:underline">
          Forgot your password?
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-all"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
