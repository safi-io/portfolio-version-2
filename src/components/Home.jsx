import React from "react";
import profile_picture from "../assets/profile_picture.jpg";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import resume from "../M Safiullah Khan.pdf";

export default function Home() {
  return (
    <section className="maxWidth flex items-center justify-around lg:h-[85vh] h-full text-white flex-col-reverse lg:flex-row flex-wrap ">
      <motion.div
        className="flex flex-col items-center lg:w-[50%] w-full"
        initial={{ x: "-7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className="relative">
          <h1 className="lg:text-6xl font-black mb-2 uppercase text-4xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 max-w-[50%] bg-clip-text text-transparent">
              Safi Khan.
            </span>
          </h1>
          <div className="absolute -top-2 -left-5 bg-red-500 rounded-full lg:w-10 lg:h-10 h-8 w-8 -z-10"></div>
        </div>

        <div className="flex items-center mb-5 text-center max-w-[90%] font-bold">
          <span>
            CS '27 COMSATS | Strong Foundation in Data Structures & Algorithms,
            Database Systems, Object-Oriented Programming & Linux | Java | MERN
            Stack | Git
          </span>
        </div>

        <div className="flex items-center gap-10 flex-row-reverse">
          <div>
            <a href={resume} download>
              <Button variant="contained" startIcon={<CloudDownloadIcon />}>
                Download CV
              </Button>
            </a>
          </div>

          <div>
            <span className="font-semibold">
              Based in
              <ReactCountryFlag
                countryCode="PK"
                svg
                style={{ fontSize: "40px" }}
                className="rounded-xl ml-2"
              />
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-500 to-pink-900 max-w-[50%] mt-8"
        initial={{ x: "7rem", opacity: "0.1" }}
        animate={{ x: 0, opacity: "1" }}
        transition={{ duration: 2, type: "spring" }}
      >
        <img
          src={profile_picture}
          alt="Profile Picture"
          className="rounded-full hover:scale-110 scale-100 duration-700 lg:w-[400px] w-[50vh]"
        />
      </motion.div>
    </section>
  );
}
