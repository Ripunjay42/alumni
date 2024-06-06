import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const RegisterForm = () => {
  const [user, setUser] = useState(null);
  const [reg, setReg] = useState({ signup: "none" });


  const registerUser = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post('https://alumni-server-sigma.vercel.app/register', user);
      console.log('Registration successful:', response.data);
      setReg({signup:"registered"});
      console.log(reg); 
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle registration errors (e.g., display error messages)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen style={{ marginTop: '-100px' } ">
      <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-11 px-17 rounded-lg shadow-lg">
        {reg.signup==="registered" && <p style={{color : 'white'}}>registered successfully</p>}
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-semibold mb-1">User_id:</label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event) => {
                setUser({ ...user, user_id: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
          </div>
          <button type="submit"  className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
