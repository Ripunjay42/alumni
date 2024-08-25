import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ppggetc', // replace with your EmailJS Service ID
      'template_369nstg', // replace with your EmailJS Template ID
      formData,
      'eZlX0ZPyVjb0fuMm-' // replace with your EmailJS User ID
    ).then((result) => {
        setMessage('Message sent successfully!');
        setMessageType('success');

        // Clear the form fields after a successful message
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }, (error) => {
        setMessage('An error occurred, please try again.');
        setMessageType('error');

        // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-transparent p-8 rounded-lg shadow-lg"
           style={{
              border: '1px solid rgba(0, 255, 255, 0.7)', // Neon border effect
              boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)', // Neon effect
              backdropFilter: 'blur(6px)', // Background blur effect
              borderRadius: '10px' // Consistent border radius
           }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mt-6 text-3xl font-extrabold text-green-400">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-red-400 font-bold">
            We'd love to hear from you!
          </p>
        </motion.div>

        <motion.form
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onSubmit={handleSubmit}
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-transparent border border-gray-300 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-transparent border border-gray-300 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-transparent border border-gray-300 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
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

          {message && (
            <div
              className={`mt-4 text-center text-lg font-semibold ${
                messageType === 'success' ? 'text-green-400' : 'text-red-600'
              }`}
            >
              {message}
            </div>
          )}
        </motion.form>

        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://www.linkedin.com/in/ripunjay-choudhury-83864524b/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="text-blue-500 hover:text-blue-600"
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
