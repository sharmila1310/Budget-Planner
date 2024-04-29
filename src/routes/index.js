import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import CommonOutlet from "../components/CommonOutlet/CommonOutlet";
import routePath from "./routePath";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
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
