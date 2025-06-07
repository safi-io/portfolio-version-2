import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section className="maxWidth mt-4 h-[10vh] px-4">
      <div className="flex items-center justify-between text-white relative mt-5">
        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Left - Navigation Links */}
          <div>
            <ul className="flex gap-6 font-semibold text-gray-400">
              <Link to="/">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Introduction
                </li>
              </Link>
              <Link to="/About">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Journey
                </li>
              </Link>
              <Link to="/Technologies">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Toolbox
                </li>
              </Link>
              <Link to="/Projects">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Creations
                </li>
              </Link>
              <Link to="/Certifications">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Certifications
                </li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Connect
                </li>
              </Link>
            </ul>
          </div>

          {/* Right - Social Icons */}
          <div>
            <ul className="flex gap-4 text-3xl text-gray-300">
              <a
                href="https://www.linkedin.com/in/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <IoLogoLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://leetcode.com/u/safi-io/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <SiLeetcode />
                </li>
              </a>
              <a
                href="https://hashnode.com/@safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaHashnode />
                </li>
              </a>
              <a
                href="https://x.com/ranasafikhan"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaXTwitter />
                </li>
              </a>
              <a
                href="https://wa.me/+923287919711"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        {isMobile && (
          <div className="flex flex-col w-full items-center justify-center py-2 px-1">
            {/* Social Icons - smaller and tighter */}
            <ul className="flex gap-7 text-xl text-gray-300 justify-center flex-wrap mb-8">
              {" "}
              {/* Added mb-8 */}
              <a
                href="https://www.linkedin.com/in/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <IoLogoLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://leetcode.com/u/safi-io/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <SiLeetcode />
                </li>
              </a>
              <a
                href="https://hashnode.com/@safi-io"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaHashnode />
                </li>
              </a>
              <a
                href="https://x.com/ranasafikhan"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaXTwitter />
                </li>
              </a>
              <a
                href="https://wa.me/+923287919711"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp />
                </li>
              </a>
            </ul>

            {/* Navigation links - smaller font, more compact */}
            <ul className="flex flex-wrap gap-4 font-semibold text-gray-400 justify-center text-sm">
              <Link to="/">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                  Introduction
                </li>
              </Link>
              <Link to="/About">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                  Journey
                </li>
              </Link>
              <Link to="/Technologies">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                  Toolbox
                </li>
              </Link>
              <Link to="/Projects">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                  Creations
                </li>
              </Link>
              <Link to="/Certifications">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300">
                  Certifications
                </li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                  Connect
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
