import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Digital Library System',
    description: 'A full-stack web application to manage digital book lending with user roles, search functionality, and secure login.',
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL or local image later
    github: 'https://github.com/AdityaMISHRA2803/Digital-Library',
    demo: 'https://digital-library-demo.vercel.app',
  },
  {
    title: 'Music Player (MERN)',
    description: 'A modern music player built using the MERN stack with user authentication, playlist management, and media controls.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/AdityaMISHRA2803/Music-Player',
    demo: 'https://music-player-demo.vercel.app',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description: 'A visual tool to understand how different sorting algorithms work with animations and step-by-step processing.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/AdityaMISHRA2803/Sorting-Visualizer',
    demo: 'https://sorting-visualizer-demo.vercel.app',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
