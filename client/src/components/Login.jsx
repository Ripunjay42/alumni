import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({setLoggedin, setAdminloggedin, setUserId}) => {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');
  const [adminlog, setAdminlog] = useState(null);
//   const [userlogin, setUserlogin] =useState(false);
//   const [adminlogin, setAdminlogin] =useState(false);


  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login/user', { user_id, password });
      console.log('User Login:', response.data);
      console.log({user_id, password});
      setLoggedin(true);
      setUserId(user_id);
    } catch (error) {
      console.error('User Login Error:', error.response.data);
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login/admin', adminlog);
      console.log('Admin Login:', response.data);
      console.log('adminlog');
      setAdminloggedin(true);
    } catch (error) {
      console.error('Admin Login Error:', error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen style={{ marginTop: '-100px'} ">
      <div className="flex space-x-6">
        {/* User Login Form */}
        <form onSubmit={handleUserLogin} className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-11 px-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">User Login</h2>
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-semibold mb-1">User ID:</label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_password" className="block text-sm font-semibold mb-1">Password:</label>
            <input
              type="password"
              id="password"
              nmae="password"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">Login</button>
        </form>

        {/* Admin Login Form */}
        <form onSubmit={handleAdminLogin} className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-11 px-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <div className="mb-4">
            <label htmlFor="admin_id" className="block text-sm font-semibold mb-1">Admin ID:</label>
            <input
              type="text"
              id="admin_id"
              name="admin_id"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event) => {
                setAdminlog({ ...adminlog, admin_id: event.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_password" className="block text-sm font-semibold mb-1">Password:</label>
            <input
              type="password"
              id="password"
              nmae="password"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
              required
              onChange={(event)=>{
                setAdminlog({...adminlog, password : event.target.value});
              }}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
