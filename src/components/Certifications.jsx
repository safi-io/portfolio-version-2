import React, { useState } from "react";
import certifications from "../../utils/certificateDetails.js";
import { motion } from "framer-motion";

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="maxWidth px-5">
      {/* Section Title */}
      <motion.h1
        className="lg:text-5xl text-2xl font-medium mb-10 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Certifications
      </motion.h1>

      {/* Certifications List */}
      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Collapsible Button */}
            <button
              onClick={() => toggleCollapse(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-white font-semibold hover:bg-gray-700 focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <div>
                <div className="text-lg">{cert.title}</div>
                <div className="text-sm text-gray-400">
                  {cert.provider} | {cert.date}
                </div>
              </div>
              <div className="text-2xl text-gray-400">
                {openIndex === index ? "-" : "+"}
              </div>
            </button>

            {/* Collapsible Content */}
            {openIndex === index && (
              <motion.div
                className="px-6 pb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto mt-4 rounded-md border border-gray-600 hover:scale-105 transition-transform duration-300"
                />

                {cert.verificationUrl && (
                  <div className="mt-4">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-20"></div>
    </section>
  );
}
