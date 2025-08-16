import React from "react";
import DetailBar from "./DetailBar";
import {
  educationDetails,
  volunteeringDetails,
  experinceDetails,
} from "../../utils/aboutDetails";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="maxWidth text-white px-5 pt-16 lg:pt-0">
      {/* About Section */}
      <motion.h1
        className="lg:text-5xl text-2xl font-medium"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h1>
      <p className="mt-5 w-full lg:max-w-[80%] text-[#c3c0c0]">
        Safiullah Khan is a CS undergraduate and a Software Engineer at Fantech
        Labs, based in Pakistan. He has built a strong foundation in core
        computing areas, including Data Structures & Algorithms, OOP, Databases,
        Computer Networks, and Operating Systems. <br /> <br />
        He also holds certifications from leading institutions such as Google,
        Meta, Cisco, and Harvard University. Safiullah has actively mentored
        hundreds of students, helping them start their journeys in computer
        science. He has also held key positions in university societies, serving
        as a Tech Lead and Workshop Speaker. <br /> <br />
        With a deep interest in understanding systems from the ground up and a
        strong inclination toward system design, he aims to become a
        technology-agnostic engineer, adaptable across stacks and platforms.
      </p>

      {/* Experince Session Starts */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Experince
      </motion.h1>

      {experinceDetails.map((experince, index) => (
        <DetailBar
          key={index}
          mainHeading={experince.mainHeading}
          institute={experince.institute}
          additionalInfo={experince.additionalInfo}
          date={experince.date}
        />
      ))}

      {/* Education Session Starts */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Education
      </motion.h1>

      {educationDetails.map((education, index) => (
        <DetailBar
          key={index}
          mainHeading={education.mainHeading}
          institute={education.institute}
          additionalInfo={education.additionalInfo}
          date={education.date}
        />
      ))}

      {/* Volunteering Section */}

      <motion.h1
        className="mt-7 lg:text-5xl text-2xl font-medium"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
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
