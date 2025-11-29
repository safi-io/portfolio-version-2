import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-[#0a0a0a] min-h-screen">
          <Home />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
