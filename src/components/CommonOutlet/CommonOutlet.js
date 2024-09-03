import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const CommonOutlet = () => {
  return (
    <div className="app-container">
      <Header />

      <div className="main-body">
        <Sidebar />
        <div className="body-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet;
