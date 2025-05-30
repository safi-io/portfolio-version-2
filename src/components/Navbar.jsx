import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setMenuOpened((prev) => !prev);
  };

  const menuStyle = () => {
    return menuOpened ? { display: "block" } : {};
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section className="maxWidth mt-4 h-[10vh]">
      <div className="flex items-center justify-between text-white relative">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            width={120}
            className="hover:scale-110 cursor-pointer duration-700"
          />
        </Link>

        <div className="gap-12 items-center hidden md:flex">
          <ul className="flex gap-4 font-semibold text-gray-400">
            <Link to="/">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                About
              </li>
            </Link>
            <Link to="/Technologies">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                Technologies
              </li>
            </Link>
            <Link to="/Projects">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                Projects
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                Contact
              </li>
            </Link>
          </ul>
          <ul className="flex gap-3 text-3xl text-gray-300">
            <a href="https://www.linkedin.com/in/safi-io" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                <IoLogoLinkedin />
              </li>
            </a>
            <a href="https://github.com/safi-io" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                <FaGithub />
              </li>
            </a>
            <a href="https://leetcode.com/u/safi-io/" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                <SiLeetcode />
              </li>
            </a>

            <a href="https://hashnode.com/@safi-io" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
              <FaHashnode />
              </li>
            </a>

            <a href="https://x.com/ranasafikhan" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
              <FaXTwitter />
              </li>
            </a>

            <a href="https://wa.me/+923287919711" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                <FaWhatsapp />
              </li>
            </a>
          </ul>
        </div>

        {/* Mobile Responsive Menu */}

        {windowWidth < 768 ? (
          <div
            style={menuStyle()}
            className=" hidden z-50 absolute bg-gray-900 right-5 top-20 rounded-2xl p-10 flex-col items-start justify-center transition-all duration-1000"
          >
            <ul className="flex flex-col justify-start gap-4 font-semibold text-gray-400">
              <Link to="/">
                <li
                  className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000"
                  onClick={() => setMenuOpened(false)}
                >
                  Home
                </li>
              </Link>
              <Link to="/About">
                <li
                  className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000"
                  onClick={() => setMenuOpened(false)}
                >
                  About
                </li>
              </Link>
              <Link to="/Technologies">
                <li
                  className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000"
                  onClick={() => setMenuOpened(false)}
                >
                  Technologies
                </li>
              </Link>
              <Link to="/Projects">
                <li
                  className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000"
                  onClick={() => setMenuOpened(false)}
                >
                  Projects
                </li>
              </Link>
              <Link to="/Contact">
                <li
                  className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000"
                  onClick={() => setMenuOpened(false)}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <ul className="flex gap-4 text-3xl text-gray-300 mt-5">
              <a href="https://www.linkedin.com/in/safi-io" target="_blank">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <IoLogoLinkedin />
                </li>
              </a>
              <a href="https://github.com/safi-io" target="_blank">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <FaGithub />
                </li>
              </a>
              <a href="https://leetcode.com/u/safi-io/" target="_blank">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                  <SiLeetcode />
                </li>
              </a>
              <a href="https://hashnode.com/@safi-io" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
              <FaHashnode />
              </li>
            </a>
            <a href="https://x.com/ranasafikhan" target="_blank">
              <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
              <FaXTwitter />
              </li>
            </a>
              <a href="https://wa.me/+923287919711" target="_blank">
                <li className="hover:text-gray-200 hover:cursor-pointer hover:scale-110 hover:transition-transform duration-1000">
                <FaWhatsapp />
                </li>
              </a>
            </ul>
          </div>
        ) : (
          <></>
        )}

        <HiBars3BottomRight
          className=" flex text-3xl md:hidden text-white mr-5 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </section>
  );
}
