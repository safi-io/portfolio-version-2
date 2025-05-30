import React from "react";
import { projectDetails } from "../../utils/projectsDetails";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="maxWidth text-white px-5">
      <motion.h1
        className="mt-20 lg:text-5xl text-2xl font-medium mb-10 text-white"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        Projects (Different Stacks)
      </motion.h1>

      <motion.div
        className="flex overflow-x-auto space-x-6 pb-5 scrollbar-custom px-2"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {projectDetails.map((project, index) => (
          <motion.div
            className="min-w-[350px] h-[500px] bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={project.url}
                alt="projectImages"
                className="w-full h-[250px] object-cover hover:scale-110 duration-500 cursor-pointer"
              />
            </div>

            {/* Project Details */}
            <div className="p-4 flex flex-col justify-between h-[50%]">
              <h1 className="text-2xl mb-2">{project.title}</h1>
              <p className="text-[#bdbaba] text-base font-light mb-4">
                {project.details}
              </p>

              <div className="flex items-center justify-between">
                <span>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      className="underline"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400 cursor-not-allowed underline">
                      Live Demo
                    </span>
                  )}
                </span>
                <span>
                  <a
                    href={project.github}
                    target="_blank"
                    className="underline"
                  >
                    GitHub Repository
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
