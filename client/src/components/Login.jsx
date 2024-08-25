import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setLoggedin, setAdminloggedin, setUserId }) => {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');
  const [adminlog, setAdminlog] = useState({ admin_id: '', password: '' });
  const [userMessage, setUserMessage] = useState({ content: '', type: '' });
  const [adminMessage, setAdminMessage] = useState({ content: '', type: '' });

  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://alumni-server-kappa.vercel.app/login/user', { user_id, password });
      console.log('User Login:', response.data);
      setLoggedin(true);
      setUserId(user_id);
      setUserMessage({ content: 'User logged in successfully!', type: 'success' });

      setTimeout(() => {
        setUserMessage({ content: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('User Login Error:', error.response?.data || error.message);
      setUserMessage({ content: error.response?.data?.error || 'User login failed. Please try again.', type: 'error' });

      setTimeout(() => {
        setUserMessage({ content: '', type: '' });
      }, 3000);
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://alumni-server-kappa.vercel.app/login/admin', adminlog);
      console.log('Admin Login:', response.data);
      setAdminloggedin(true);
      setAdminMessage({ content: 'Admin logged in successfully!', type: 'success' });

      setTimeout(() => {
        setAdminMessage({ content: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('Admin Login Error:', error.response?.data || error.message);
      setAdminMessage({ content: error.response?.data?.error || 'Admin login failed. Please try again.', type: 'error' });

      setTimeout(() => {
        setAdminMessage({ content: '', type: '' });
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-6">
        {/* User Login Form */}
        <form
          onSubmit={handleUserLogin}
          className="bg-opacity-30 bg-transparent p-11 px-10 rounded-lg shadow-lg"
          style={{
            border: '1px solid transparent',
            boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)',
            backdropFilter: 'blur(6px)', // Optional: Adds blur effect to background
          }}
        >
          {userMessage.content && (
            <p style={{ color: userMessage.type === 'success' ? 'green' : 'red' }}>{userMessage.content}</p>
          )}
          <h2 className="text-2xl font-bold mb-4 text-white">User Login</h2>
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-semibold mb-1 text-white">User ID:</label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="w-full px-3 py-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:border-blue-500"
              required
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1 text-white">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Admin Login Form */}
        <form
          onSubmit={handleAdminLogin}
          className="bg-opacity-30 bg-gray-800 p-11 px-10 rounded-lg shadow-lg"
          style={{
            border: '2px solid transparent',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)', // Optional: Adds blur effect to background
          }}
        >
          {adminMessage.content && (
            <p style={{ color: adminMessage.type === 'success' ? 'green' : 'red' }}>{adminMessage.content}</p>
          )}
          <h2 className="text-2xl font-bold mb-4 text-white">Admin Login</h2>
          <div className="mb-4">
            <label htmlFor="admin_id" className="block text-sm font-semibold mb-1 text-white">Admin ID:</label>
            <input
              type="text"
              id="admin_id"
              name="admin_id"
              className="w-full px-3 py-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:border-blue-500"
              required
              value={adminlog.admin_id}
              onChange={(e) => setAdminlog({ ...adminlog, admin_id: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="admin_password" className="block text-sm font-semibold mb-1 text-white">Password:</label>
            <input
              type="password"
              id="admin_password"
              name="password"
              className="w-full px-3 py-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:border-blue-500"
              required
              value={adminlog.password}
              onChange={(e) => setAdminlog({ ...adminlog, password: e.target.value })} 
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
