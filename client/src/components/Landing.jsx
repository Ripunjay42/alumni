import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../images/alumni.gif';

export default function Landing() {

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: Math.random()
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ perspective: 1000 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-green-400 mb-6" 
          initial={{ opacity: 0, y: -50, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Alumni Information
        </motion.h1>
        <motion.p 
          className="text-2xl font-bold text-red-600 mb-6" 
          initial={{ opacity: 0, y: 50, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Stay connected with your alma mater!
        </motion.p>
        <motion.img 
          src={logo} 
          alt="Alumni Logo" 
          className="w-40 h-40 mx-auto mb-6"
          initial={{ y: -10, rotateZ: 0 }}
          animate={{ y: [0, -10, 0], rotateZ: [0, 360, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <Link to="/alumni">
          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-violet-900 via-green-900 to-red-900 text-white text-lg font-bold rounded hover:bg-gray-200 transition duration-300"
            initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Additional Links Section */}
      <motion.div
        className="text-center relative z-10 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-white text-lg mb-4">Discover more:</p>
        <div className="flex space-x-4 justify-center">
          <Link to="/events">
            <motion.button 
              className="px-4 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Events
            </motion.button>
          </Link>
          <Link to="/news">
            <motion.button 
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              News
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button 
              className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
