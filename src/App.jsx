import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatedBackground } from "animated-backgrounds";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <CustomCursor />
          <AnimatedBackground
            animationName="auroraBorealis"
            style={{ opacity: 0.3 }}
          />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}