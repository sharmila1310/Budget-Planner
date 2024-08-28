import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const CommonOutlet = () => {
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
