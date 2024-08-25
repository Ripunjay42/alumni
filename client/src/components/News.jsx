import React from 'react';
import { motion } from 'framer-motion';

const newsArticles = [
  {
    title: "Alumni Meet 2024",
    date: "May 15, 2024",
    excerpt: "Join us for the annual alumni meet this summer. Reconnect with old friends and make new memories.",
    link: "#"
  },
  {
    title: "New Research Initiative",
    date: "April 10, 2024",
    excerpt: "Our institution is launching a new research initiative focused on sustainable energy solutions.",
    link: "#"
  },
  {
    title: "Alumni Success Stories",
    date: "March 20, 2024",
    excerpt: "Read about the incredible achievements of our alumni in various fields and industries.",
    link: "#"
  },
];

export default function News() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-extrabold text-green-400">
            Latest News
          </h2>
          <p className="mt-2 text-sm text-red-600">
            Stay updated with the latest happenings!
          </p>
        </motion.div>
        
        <div className="mt-8 h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-transparent p-6 rounded-lg shadow-lg"
              style={{
                border: '1px solid transparent',
                boxShadow: '0 0 6px rgba(0, 255, 255, 0.7)', // Neon border effect
                backdropFilter: 'blur(6px)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {article.title}
              </h3>
              <p className="text-white text-sm mb-4">
                {article.date}
              </p>
              <p className="text-gray-100 mb-4">
                {article.excerpt}
              </p>
              <a 
                href={article.link} 
                className="text-indigo-300 hover:text-indigo-500 font-bold"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
