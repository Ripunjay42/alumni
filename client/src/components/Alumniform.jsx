import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alumnidetails from './Alumnidetails';

export default function Alumniform({ userId, setLoggedin }) {
  const [alumniInfo, setAlumniInfo] = useState({
    user_id: userId, // Initialize with userId
    name: '',
    dob: '',
    motherName: '',
    fatherName: '',
    phone: '',
    address: '',
    graduation_date: '',
    admission_date: '',
    course: ''
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    if (userId) {
      checkAlumniExists();
    }
  }, [userId]);

  const checkAlumniExists = async () => {
    try {
      const response = await axios.get(`https://alumni-server-kappa.vercel.app/api/alumni/${userId}`);
      if (response.data.exists) {
        setSubmissionSuccess(true);
      }
    } catch (error) {
      console.error('Error checking alumni existence:', error.response.data);
    }
  };

  const handleSubmit = async (event) => {
    console.log('Alumni details:', alumniInfo);
    event.preventDefault();
    try {
      const response = await axios.post('https://alumni-server-kappa.vercel.app/api/alumni', alumniInfo);
      console.log('Alumni details submitted successfully:', response.data);
      setSubmissionSuccess(true);
    } catch (error) {
      console.error('Error submitting alumni details:', error.response.data);
      alert('Error submitting alumni details. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAlumniInfo({ ...alumniInfo, [name]: value });
  };

  const handleLogout = () => {
    setLoggedin(false);
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      {submissionSuccess ? (
        <Alumnidetails userId={userId} setLoggedin={setLoggedin} setSubmissionSuccess={setSubmissionSuccess} />
      ) : (
        <div className="bg-transparent p-8 rounded-lg shadow-lg" style={{border: '1px solid transparent',
          boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)', // Neon border effect
          backdropFilter: 'blur(6px)', }}>
          <h2 className="text-3xl font-bold mb-6 text-green-400">Alumni Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="user_id" className="block text-sm font-semibold mb-1 text-white">User ID:</label>
                <input
                  type="text"
                  id="user_id"
                  name="user_id"
                  value={alumniInfo.user_id} // Pre-filled value
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  disabled // Disable field
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-white">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dob" className="block text-sm font-semibold mb-1 text-white">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="motherName" className="block text-sm font-semibold mb-1 text-white">Mother's Name:</label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fatherName" className="block text-sm font-semibold mb-1 text-white">Father's Name:</label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1 text-white">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-semibold mb-1 text-white">Address:</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500 resize-none"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="graduation_date" className="block text-sm font-semibold mb-1 text-white">Graduation Date:</label>
                <input
                  type="date"
                  id="graduation_date"
                  name="graduation_date"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="admission_date" className="block text-sm font-semibold mb-1 text-white">Admission Date:</label>
                <input
                  type="date"
                  id="admission_date"
                  name="admission_date"
                  className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-semibold mb-1 text-white">Course:</label>
              <input
                type="text"
                id="course"
                name="course"
                className="w-full px-3 py-2 rounded border border-white bg-transparent  text-white focus:outline-none focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300" style={{ boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)' }}>Submit</button>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLogout}
                className="bg-transparent border border-white hover:bg-white hover:text-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-md"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
