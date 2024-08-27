import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import CommonOutlet from "../components/CommonOutlet/CommonOutlet";
import routePath from "./routePath";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  useEffect(() => {
    const getLocalStorageValue = localStorage.getItem("theme-mode");
    console.log("dd getLocalStorageValue", getLocalStorageValue);

    if (
      getLocalStorageValue === "light-mode" ||
      getLocalStorageValue === null
    ) {
      document.getElementsByTagName("body")[0].classList.add("light-theme");
      document.getElementsByTagName("body")[0].classList.remove("dark-theme");
    } else {
      document.getElementsByTagName("body")[0].classList.add("dark-theme");
      document.getElementsByTagName("body")[0].classList.remove("light-theme");
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          <Route path={routePath.root} element={<Home />} />
          <Route path={routePath.about} element={<About />} />
          <Route path={routePath.contact} element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
