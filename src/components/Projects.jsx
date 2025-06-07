import { motion } from "framer-motion";
import { projectDetails } from "../../utils/projectsDetails.js";

export default function Projects() {
  return (
    <section className="maxWidth px-5 text-white pt-16 lg:pt-0">
      <motion.h1
        className="lg:text-5xl text-2xl font-medium mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        My Projects
      </motion.h1>

      {/* Instruction line */}
      <p className="text-gray-400 mb-10">
        If you want to see the UI and in-depth details of any project, click on the GitHub button present on the card.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-xl font-bold mb-1 text-white">{project.title}</h2>

            {/* Date line */}
            {project.date && (
              <div className="text-sm text-gray-400 mb-3">{project.date}</div>
            )}

            <p className="text-gray-300 text-base mb-4 leading-relaxed">
              {project.details}
            </p>

            {/* Tags */}
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
          </motion.div>
        ))}
      </div>

      <div className="mb-20"></div>
    </section>
  );
}
