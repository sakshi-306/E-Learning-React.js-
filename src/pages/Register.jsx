import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({
    name: "",
    dob: "",
    email: "",
    contact: "",
    password: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  const formHandler = (e) => {
    e.preventDefault();

    // ✅ Save data to localStorage
    localStorage.setItem("user", JSON.stringify(input));

    alert("Registration successful!");
    navigate('/Login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-6">
      <form
        onSubmit={formHandler}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-sm"
      >
        <h2 className="text-center text-2xl font-semibold mb-6">
          Create an Account
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            placeholder="Your Name"
            required
            value={input.name}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">DOB</label>
          <input
            type="date"
            name="dob"
            className="w-full border px-3 py-2 rounded"
            required
            value={input.dob}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="abc@gmail.com"
            required
            value={input.email}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Contact</label>
          <input
            type="tel"
            name="contact"
            className="w-full border px-3 py-2 rounded"
            placeholder="9912345678"
            required
            value={input.contact}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Create Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            placeholder="Create Password"
            required
            value={input.password}
            onChange={inputHandler}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[100px] hover:scale-110 bg-black text-white py-2 rounded-full hover:bg-slate-600 transition duration-150"
          >
            Submit
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 underline">
            Login
          </Link>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-3 text-sm items-center">
          <button className="btn bg-white hover:scale-110 hover:bg-slate-300 text-black border-[#e5e5e5] w-full sm:w-[300px] border-2 flex items-center justify-center gap-2 py-2 rounded-md">
            Login with Email
          </button>

          <button className="btn bg-black text-white hover:scale-110 hover:bg-slate-700 border-black w-full sm:w-[300px] flex items-center justify-center gap-2 py-2 rounded-md">
            Login with GitHub
          </button>

          <button className="btn bg-white text-black hover:scale-110 hover:bg-slate-300 border-[#e5e5e5] border-2 w-full sm:w-[300px] flex items-center justify-center gap-2 py-2 rounded-md">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
