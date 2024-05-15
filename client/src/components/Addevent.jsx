import React, { useState } from 'react';
import axios from 'axios';

const Addevent = ({ setIsevent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    location: '',
    date: '',
    description: '',
    image: ''
  });

  const [added, setAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log('Event data:', eventData);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/events', eventData);
      console.log('Event added:', response.data);
      setAdded(true);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleCancel = () => {
    setIsevent(false); // Close the form without submission
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
    {added && <p style={{color : 'white'}}>event added successfully</p>}
      <div className="container mx-auto">
        <h1 className="text-5xl text-center text-white font-bold mb-4">Add Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={eventData.image}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Event
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
              onClick={handleCancel}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addevent;