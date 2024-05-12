// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/alumni.gif';

const Navbar = () => {

  document.body.style.overflow = 'hidden';
  
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-transparent-700  overflow-hidden">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} className="h-12" alt="alumni" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-10 md:p-0 mt-8 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-3 px-4 text-gray-900 rounded-md hover:bg-transparent-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-2x1" aria-current="page"> Home</Link>
            </li>
            <li>
              <Link to="/login" className="block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Login</Link>
            </li>
            <li>
              <Link to="/register" className="block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Register</Link>
            </li>
            <li>
              <Link to="/alumni" className="block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Alumni</Link>
            </li>
            <li>
              <Link to="/events" className="block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
