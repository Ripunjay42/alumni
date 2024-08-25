import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const RegisterForm = () => {
  const [user, setUser] = useState({ user_id: '', name: '', email: '', password: '' });
  const [message, setMessage] = useState({ content: '', type: '' });

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://alumni-server-kappa.vercel.app/register', user);
      console.log('Registration successful:', response.data);
      setMessage({ content: 'Registered successfully!', type: 'success' });

      // Clear the form fields
      setUser({ user_id: '', name: '', email: '', password: '' });

      setTimeout(() => {
        setMessage({ content: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      setMessage({ content: 'Registration failed. Please try again.', type: 'error' });

      setTimeout(() => {
        setMessage({ content: '', type: '' });
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="p-11 px-17 rounded-lg shadow-lg"
        style={{
          backgroundColor: 'transparent', // Semi-transparent dark background
          border: '1px solid transparent',
          boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)', // Neon border effect
          backdropFilter: 'blur(6px)', // Optional blur effect
        }}
      >
        {message.content && (
          <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.content}</p>
        )}
        <h2 className="text-2xl font-bold mb-4 text-white">Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-semibold mb-1 text-white">User ID:</label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="w-full px-3 py-2 rounded border border-gray-300 bg-transparent text-white  focus:outline-none focus:border-blue-500"
              required
              value={user.user_id}
              onChange={(event) => {
                setUser({ ...user, user_id: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-white">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded border border-gray-300 bg-transparent text-white focus:outline-none focus:border-blue-500"
              required
              value={user.name}
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-white">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded border border-gray-300 bg-transparent text-white  focus:outline-none focus:border-blue-500"
              required
              value={user.email}
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1 text-white">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 rounded border border-gray-300 bg-transparent text-white  focus:outline-none focus:border-blue-500"
              required
              value={user.password}
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
