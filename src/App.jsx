import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatedBackground } from "animated-backgrounds";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <>
      {loading ? (
        <div>
          {!isMobile && <CustomCursor />}
          <AnimatedBackground
            animationName="auroraBorealis"
            style={{ opacity: 0.3 }}
          />
          <Navbar />
          {isMobile && <div className="mb-5"></div>}
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
