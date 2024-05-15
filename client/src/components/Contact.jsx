import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transpaent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mt-6 text-3xl font-extrabold text-green-400">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-red-600">
            We'd love to hear from you!
          </p>
        </motion.div>
        <motion.form
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
              />
            </div>
          </div>

          <div>
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="text-blue-700 hover:text-blue-900"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={30} />
            </motion.div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="text-pink-500 hover:text-pink-700"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram size={30} />
            </motion.div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="text-blue-400 hover:text-blue-600"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter size={30} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
