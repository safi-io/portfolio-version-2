import React from "react";
import DetailBar from "./DetailBar";
import { educationDetails, volunteeringDetails } from "../../utils/aboutDetails";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="maxWidth text-white px-5">
      {/* About Section */}
      <motion.h1
        className="mt-20 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        About Me
      </motion.h1>
      <p className="mt-5 w-full lg:max-w-[70%] text-[#c3c0c0]">
      I am a second-year CS undergraduate student based in Pakistan. Currently, I am focused on sharpening my core skills in computing and programming. My ultimate goal is to become a technology agnostic software engineer.
      </p>

      {/* Education Session Starts */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        Education
      </motion.h1>

      {educationDetails.map((education, index) => (
        <DetailBar
          key={index}
          mainHeading={education.mainHeading}
          institute={education.institute}
          location={education.location}
          additionalInfo={education.additionalInfo}
          date={education.date}
        />
      ))}

      {/* Volunteering Section */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        Volunteering
      </motion.h1>

      {volunteeringDetails.map((volunteer, index) => (
        <DetailBar
          key={index}
          mainHeading={volunteer.mainHeading}
          institute={volunteer.institute}
          location={volunteer.location}
          additionalInfo={volunteer.additionalInfo}
          date={volunteer.date}
        />
      ))}

      <div className="mb-20"></div>
    </section>
  );
}
