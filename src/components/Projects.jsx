import React, { useState } from "react";
import { motion } from "framer-motion";

import { projectDetails } from "../../utils/projectsDetails";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl flex flex-col transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{
        y: -5, // Lift up slightly
        boxShadow: "0 15px 30px rgba(0,0,0,0.4)", // Stronger shadow
        scale: 1.02, // Slightly more pronounced scale
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of element is in view
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Image with enhanced swap and frame idea */}
      <div className="relative w-full h-[450px] sm:h-[200px] md:h-[220px] lg:h-[250px] overflow-hidden bg-gray-800 flex items-center justify-center">
        {/* You'd replace this with your actual image component,
            ideally one that crops/frames your full-screen images */}
        <img
          src={
            hovered && project.images?.[1]
              ? project.images[1]
              : project.images?.[0] ||
                "https://via.placeholder.com/800x450?text=Project+Image"
          }
          alt={project.title}
          // The key here is to use object-cover or object-contain strategically
          // and potentially wrap it in a div that acts as a device frame.
          // For now, object-cover will fill the space.
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
        />
        {/* Subtle gradient overlay for extra polish */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
            hovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        ></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
        <p className="text-gray-300 text-base mb-4 flex-grow leading-relaxed">
          {project.details}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-gray-700 mt-auto">
          <a
            href={project.live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform
              ${
                project.live
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed opacity-70"
              }`}
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform
              bg-gray-700 text-indigo-400 hover:text-indigo-300 hover:bg-gray-600 border border-gray-600 hover:border-indigo-500 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Ensure your Projects component is also updated to import and use ProjectCard
export default function Projects() {
  // Assuming projectDetails is imported from "../../utils/projectsDetails";
  // or defined here
  return (
    <section className="maxWidth text-white px-5">
      <motion.h1
        className="lg:text-5xl text-2xl font-semibold text-white sm:text-left mb-2" // Added text-center for smaller screens
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        My Creative Projects
      </motion.h1>
      <p className="mb-14">
        Use the button below each project to visit its GitHub repository for
        detailed explanations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="mb-20"></div>
    </section>
  );
}
