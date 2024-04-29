import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routePath from "../../routes/routePath";
import Header from "../Header/Header";

const CommonOutlet = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CommonOutlet;
