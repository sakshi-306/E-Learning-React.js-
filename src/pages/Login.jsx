import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backarrow from '../assets/back.png';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      if (email === savedUser.email && password === savedUser.password) {
        setError("");
        alert("Login successful!");
        navigate("/"); // go to home
      } else {
        setError("Invalid email or password!");
      }
    } else {
      setError("No user found! Please register first.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 relative">
      <form
        onSubmit={submitHandle}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm relative"
      >
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-200"
            title="Back to Home"
          >
            <img src={backarrow} className="w-full h-full object-contain" alt="Back" />
          </button>

          <h2 className="text-2xl font-semibold text-center flex-1 -ml-8">Login</h2>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-3">{error}</p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[100px] hover:scale-110 bg-black text-white py-2 rounded-full hover:bg-slate-600 transition duration-150"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-sm">
          New User?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
