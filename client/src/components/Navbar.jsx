// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

const Navbar = () => {

  document.body.style.overflow = 'hidden';
  
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-transparent   overflow-hidden ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} className="h-14 w-14" alt="alumni" />
        
  
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-10 md:p-0 mt-8 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-gray-700">
            <li>
              <Link to="/" className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-transparent-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-3xl" aria-current="page"> Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Login</Link>
            </li>
            <li>
              <Link to="/register" className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Register</Link>
            </li>
            <li>
              <Link to="/alumni" className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Alumni</Link>
            </li>
            <li>
              <Link to="/events" className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white font-size-xl" aria-current="page">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
