import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const AlumniList = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [alumniDetails, setAlumniDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await axios.get('https://alumni-server-kappa.vercel.app/api/alumni');
        setAlumniData(response.data);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchAlumniData();
  }, []);

  const handleViewProfile = async (userId) => {
    console.log('Viewing profile:', userId);
    try {
      const response = await axios.get(`https://alumni-server-kappa.vercel.app/api/alumnidetails/${userId}`);
      if (response.data.exists) {
        setSelectedAlumni(userId);
        setAlumniDetails(response.data.details);
      }
      console.log('Alumni details:', response.data.details);
    } catch (error) {
      console.error('Error fetching alumni details:', error);
    }
  };

  const handleClosePopup = () => {
    setSelectedAlumni(null);
    setAlumniDetails(null);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      {loading ? (
        <div className="text-white text-2xl">Loading...</div> // Display loading message
      ) : (
        <div className="container mx-auto p-4 relative max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Our Alumni's</h1>
          <div className="flex items-center relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              &#8592;
            </button>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 py-6 scrollbar-hide"
              style={{ scrollBehavior: 'smooth', maxWidth: '100%' }}
            >
              {alumniData.map((alumni, index) => (
                <div
                  key={index}
                  className="min-w-[370px] h-[300px] ml-3 mr-2 bg-opacity-20 bg-transparent dark:bg-opacity-20  rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                  style={{ 
                    border: '1px solid transparent',
                    boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)',
                    backdropFilter: 'blur(6px)' // Optional: Adds blur effect to background
                  }}
                >
                  <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="text-gray-900 dark:text-blue-400 leading-none text-xl">{alumni.name}</p>
                          <p className="text-gray-600 dark:text-gray-200">{alumni.course}, Graduated at {alumni.graduation_date}</p><br/><br/>
                          <button
                            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleViewProfile(alumni.user_id)}
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}

      {/* Popup */}
      {selectedAlumni && alumniDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-transparent overflow-auto bg-opacity-90" 
        style={{ 
          border: '1px solid transparent',
          boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)',
          backdropFilter: 'blur(50px)' // Optional: Adds blur effect to background
        }}>
          <div className="bg-transparent p-8 rounded-lg shadow-lg z-10 max-w-xl mx-auto"
          style={{ 
            border: '1px solid transparent',
            boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)',
            backdropFilter: 'blur(6px)' // Optional: Adds blur effect to background
          }}>
            <button
              className="absolute top-4 right-4 text-xl text-red-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClosePopup}
            >
              Close
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-green-500 mb-4">{alumniDetails.name}'s Profile</h2>
            <div className="grid grid-cols-2 gap-5 text-gray-700 dark:text-gray-200">
              <p><span className="font-extrabold text-indigo-500">Date of Birth:</span> {alumniDetails.dob}</p>
              <p><span className="font-extrabold text-indigo-500">Mother's Name:</span> {alumniDetails.motherName}</p>
              <p><span className="font-extrabold text-indigo-500">Father's Name:</span> {alumniDetails.fatherName}</p>
              <p><span className="font-extrabold text-indigo-500">Phone:</span> {alumniDetails.phone}</p>
              <p><span className="font-extrabold text-indigo-500">Address:</span> {alumniDetails.address}</p>
              <p><span className="font-extrabold text-indigo-500">Graduation Date:</span> {alumniDetails.graduation_date}</p>
              <p><span className="font-extrabold text-indigo-500">Admission Date:</span> {alumniDetails.admission_date}</p>
              <p><span className="font-extrabold text-indigo-500">Course:</span> {alumniDetails.course}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniList;
