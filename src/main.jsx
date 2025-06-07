import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    // errorElement: <><Navbar/><Error/></>,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <About />
            <Technologies />
            <Projects />
            <Certifications />
            <Contact />
          </>
        ),
      },
      {
        path: "/About",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/Technologies",
        element: (
          <>
            <Technologies />
          </>
        ),
      },
      {
        path: "/Projects",
        element: (
          <>
            <Projects />
          </>
        ),
      },
      {
        path: "/Certifications",
        element: (
          <>
            <Certifications />
          </>
        ),
      },
      {
        path: "/Contact",
        element: (
          <>
            <Contact />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
