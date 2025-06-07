import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="maxWidth mt-4 h-[10vh]">
      <div className="flex items-center justify-between text-white relative mt-5">
        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Left - Navigation Links */}
          <div className="flex">
            <ul className="flex gap-6 font-semibold text-gray-400">
              <Link to="/">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Introduction
                </li>
              </Link>
              <Link to="/About">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Journey
                </li>
              </Link>
              <Link to="/Technologies">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Toolbox
                </li>
              </Link>
              <Link to="/Projects">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Creations
                </li>
              </Link>
              <Link to="/Certifications">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Certifications
                </li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Connect
                </li>
              </Link>
            </ul>
          </div>

          {/* Right - Social Icons */}
          <div className="flex">
            <ul className="flex gap-4 text-3xl text-gray-300">
              <a
                href="https://www.linkedin.com/in/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <IoLogoLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://leetcode.com/u/safi-io/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <SiLeetcode />
                </li>
              </a>
              <a
                href="https://hashnode.com/@safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaHashnode />
                </li>
              </a>
              <a
                href="https://x.com/ranasafikhan"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaXTwitter />
                </li>
              </a>
              <a
                href="https://wa.me/+923287919711"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaWhatsapp />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        {windowWidth < 768 && (
          <div className="flex flex-col w-full items-center justify-center gap-4">
            {/* First row: Navigation Bar */}
            <ul className="flex flex-wrap gap-6 font-semibold text-gray-400 justify-center">
              <Link to="/">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Introduction
                </li>
              </Link>
              <Link to="/About">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Journey
                </li>
              </Link>
              <Link to="/Technologies">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Toolbox
                </li>
              </Link>
              <Link to="/Projects">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Creations
                </li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  Connect
                </li>
              </Link>
            </ul>

            {/* Second row: Social Icons */}
            <ul className="flex gap-6 text-3xl text-gray-300 justify-center mb-8">
              {" "}
              {/* Added mb-8 here */}
              <a
                href="https://www.linkedin.com/in/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <IoLogoLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://leetcode.com/u/safi-io/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <SiLeetcode />
                </li>
              </a>
              <a
                href="https://hashnode.com/@safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaHashnode />
                </li>
              </a>
              <a
                href="https://x.com/ranasafikhan"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaXTwitter />
                </li>
              </a>
              <a
                href="https://wa.me/+923287919711"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaWhatsapp />
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
