import React from 'react';

export default function Alumniform() {
  

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-gray-600 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-black-800">Alumni Details</h2>
        <form className="space-y-4" onSubmit={''}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="user_id" className="block text-sm font-semibold mb-1">User ID:</label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dob" className="block text-sm font-semibold mb-1">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="motherName" className="block text-sm font-semibold mb-1">Mother's Name:</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fatherName" className="block text-sm font-semibold mb-1">Father's Name:</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
        </div>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold mb-1">Address:</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="graduation_date" className="block text-sm font-semibold mb-1">Graduation Date:</label>
              <input
                type="date"
                id="graduation_date"
                name="graduation_date"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="admission_date" className="block text-sm font-semibold mb-1">Admission Date:</label>
              <input
                type="date"
                id="admission_date"
                name="admission_date"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-semibold mb-1">Course:</label>
            <input
              type="text"
              id="course"
              name="course"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
}
