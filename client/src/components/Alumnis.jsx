import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const AlumniList = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [alumniDetails, setAlumniDetails] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/alumni');
        setAlumniData(response.data);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
      }
    };

    fetchAlumniData();
  }, []);

  const handleViewProfile = async (userId) => {
    console.log('Viewing profile:', userId);
    try {
      const response = await axios.get(`http://localhost:3001/api/alumnidetails/${userId}`);
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
    <div className="flex justify-center items-center h-screen overflow-hidden ">
      <div className="container mx-auto p-4 relative max-w-4xl">
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
                className="min-w-[370px] h-[200px] bg-white dark:bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-4xl"
              >
                <div className="px-5 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="alumni" /> */}
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-blue-400 leading-none text-xl">{alumni.name}</p>
                        <p className="text-gray-600 dark:text-gray-200">{alumni.course}, Graduated at {alumni.graduation_date}</p><br/><br/>
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleViewProfile(alumni.user_id)}
                      >
                        View Profile
                      </button>
                      </div>
                    </div>
                    {/* <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleViewProfile(alumni.user_id)}
                      >
                        View Profile
                      </button>
                    </div> */}
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

      {/* Popup */}
      {selectedAlumni && alumniDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 overflow-auto bg-opacity-90">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg z-10 max-w-xl mx-auto">
            <button
              className="absolute top-4 right-4 text-xl text-red-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClosePopup}
            >
              Close
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-green-500 mb-4">{alumniDetails.name}'s Profile</h2>
            <div className="grid grid-cols-2 gap-5 text-gray-700 dark:text-gray-200">
              <p><span className="font-semibold text-indigo-500">Date of Birth:</span> {alumniDetails.dob}</p>
              <p><span className="font-semibold text-indigo-500">Mother's Name:</span> {alumniDetails.motherName}</p>
              <p><span className="font-semibold text-indigo-500">Father's Name:</span> {alumniDetails.fatherName}</p>
              <p><span className="font-semibold text-indigo-500">Phone:</span> {alumniDetails.phone}</p>
              <p><span className="font-semibold text-indigo-500">Address:</span> {alumniDetails.address}</p>
              <p><span className="font-semibold text-indigo-500">Graduation Date:</span> {alumniDetails.graduation_date}</p>
              <p><span className="font-semibold text-indigo-500">Admission Date:</span> {alumniDetails.admission_date}</p>
              <p><span className="font-semibold text-indigo-500">Course:</span> {alumniDetails.course}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniList;
