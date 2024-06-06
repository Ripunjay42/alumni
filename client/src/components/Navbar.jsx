// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="bg-transparent border-gray-200 dark:bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative z-50">
        <img src={logo} className="h-14 w-14" alt="alumni" />

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 9h14a1 1 0 010 2H3a1 1 0 010-2zM3 13h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full h-full md:block md:w-auto fixed top-0 left-0 bg-gray-700 md:bg-transparent md:relative z-40`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-10 md:p-0 mt-8 md:mt-0 md:flex-row md:space-x-20 rtl:space-x-reverse md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-transparent-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white"
                aria-current="page"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white"
                aria-current="page"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white"
                aria-current="page"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/alumni"
                className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white"
                aria-current="page"
                onClick={toggleMenu}
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="text-xl block py-3 px-4 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-green-300 md:dark:hover:text-blue-500 dark:hover:bg-transparent-700 dark:hover:text-white"
                aria-current="page"
                onClick={toggleMenu}
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
