import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alumnidetails.css';

export default function AlumniDetailsDisplay({ userId, setLoggedin, setSubmissionSuccess }) {
    const [alumniDetails, setAlumniDetails] = useState(null);

    useEffect(() => {
        fetchAlumniDetails();
    }, []);

    const fetchAlumniDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/alumnidetails/${userId}`);
            if (response.data.exists) {
                setAlumniDetails(response.data.details);
            }
        } catch (error) {
            console.error('Error fetching alumni details:', error.response.data);
        }
    };

    const handleLogout = () => {
        setLoggedin(false);
    };

    const handleEdit = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/alumnidetails/${userId}`);
            setSubmissionSuccess(false);
            setAlumniDetails(null);
        } catch (error) {
            console.error('Error editing alumni details:', error.response.data);
        }
    };

    return (
      <div className="alumni-details-container overflow-hidden relative flex justify-center items-center h-screen ">
        <div className="alumni-details-card bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl p-8 text-white z-10">
          <h2 className="alumni-details-heading text-3xl font-extrabold text-center tracking-wide">
            Your Alumni Details
          </h2>
          {alumniDetails ? (
            <div className="space-y-4 text-center">
              <p className="text-xl font-semibold leading-snug">User ID: {alumniDetails.user_id}</p>
              <p className="text-xl font-semibold leading-snug">Name: {alumniDetails.name}</p>
              <p className="text-xl font-semibold leading-snug">Date of Birth: {alumniDetails.dob}</p>
              <p className="text-xl font-semibold leading-snug">Mother's Name: {alumniDetails.motherName}</p>
              <p className="text-xl font-semibold leading-snug">Father's Name: {alumniDetails.fatherName}</p>
              <p className="text-xl font-semibold leading-snug">Phone: {alumniDetails.phone}</p>
              <p className="text-xl font-semibold leading-snug">Address: {alumniDetails.address}</p>
              <p className="text-xl font-semibold leading-snug">Graduation Date: {alumniDetails.graduation_date}</p>
              <p className="text-xl font-semibold leading-snug">Admission Date: {alumniDetails.admission_date}</p>
              <p className="text-xl font-semibold leading-snug">Course: {alumniDetails.course}</p>
            </div>
          ) : (
            <p className="text-lg font-semibold text-center">No alumni details found.</p>
          )}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLogout}
              className="logout-btn bg-transparent border border-white hover:bg-white hover:text-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-md"
            >
              Logout
            </button>
            <button
              onClick={handleEdit}
              className="edit-btn bg-transparent border border-white hover:bg-white hover:text-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md ml-4"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
     
}
