import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../images/alumni.gif';

export default function Landing() {

  return (
    <section className="h-screen flex flex-col items-center justify-center ">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-green-400 mb-6" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Alumni Information
        </motion.h1>
        <motion.p 
          className="text-2xl font-bold text-red-600 mb-6" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Stay connected with your alma mater!
        </motion.p>
        <motion.img 
          src={logo} 
          alt="Alumni Logo" 
          className="w-40 h-40 mx-auto mb-6"
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <Link to="/alumni">
          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-violet-900 via-green-900 to-red-900 text-white text-lg font-bold rounded hover:bg-gray-200 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
