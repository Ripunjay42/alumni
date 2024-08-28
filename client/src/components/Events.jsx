import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchevents = async () => {
      try {
        const response = await axios.get('https://alumni-server-kappa.vercel.app/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchevents();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      {loading ? (
        <div className="text-white text-2xl">Loading...</div> // Display loading message
      ) : (
        <div className="container mx-auto p-4 relative max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Upcoming Events</h1>
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
              {events.map(event => (
                <div
                  key={event.id}
                  className="min-w-[330px] max-h-[450px] bg-transparent ml-3 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-4xl overflow-y-auto"
                  style={{
                    backgroundColor: 'transparent', // Semi-transparent background
                    border: '1px solid transparent',
                    boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)', // Neon border effect
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-48 object-cover mx-auto" // Centering the image
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-green-400">{event.title}</h2>
                    <p className="text-green-600 mt-2">{event.Location}</p>
                    <p className="text-white mt-2">{new Date(event.date).toLocaleDateString()}</p>
                    <p className="text-white mt-4">{event.description}</p>
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
    </div>
  );
}

export default Events;
