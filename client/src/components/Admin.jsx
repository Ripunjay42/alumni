import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Addevent from './Addevent';

const Admin = ({setAdminloggedin}) => {
  const [alumniData, setAlumniData] = useState([]);
  const [isevent, setIsEvent] = useState(false);


  const fetchAlumniData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/alumni');
      setAlumniData(response.data);
    } catch (error) {
      console.error('Error fetching alumni data:', error);
    }
  };

  const deleteAlumni = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/alumni/${id}`);
      fetchAlumniData();
    } catch (error) {
      console.error('Error deleting alumni:', error);
    }
  };

  // Fetch alumni data when the component mounts
  useEffect(() => {
    fetchAlumniData();
  }, []);


function handleLogout(){
  setAdminloggedin(false);
}

const handleManageEvent = () => {
  setIsEvent(true);
}

  return (
   <div className="flex justify-center items-center h-screen overflow-hidden">
    {isevent ? (<Addevent setIsevent={setIsEvent} />) : (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center  text-white font-bold mb-4">Alumni's</h1><br/>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              DOB
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Mother's Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Father's Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Phone
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Address
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Graduation Date
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Admission Date
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Course
            </th>
            <th className="px-4 py-2 text-left font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni) => (
            <tr key={alumni.id}>
              <td className="px-4 py-2 text-left  text-green-400">
                {alumni.id}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.name}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.dob}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.motherName}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.fatherName}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.phone}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.address}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.graduation_date}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.admission_date}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                {alumni.course}
              </td>
              <td className="px-4 py-2 text-left text-green-400">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteAlumni(alumni.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleManageEvent}
          >
            Manage Events
          </button>
        </div>
    </div>)}
    </div>
  );
  
};

export default Admin;