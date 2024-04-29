import React from "react";
import routePath from "./routePath";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let userToken = true;
  if (userToken === null) {
    <Navigate to={routePath.login} />;
  }

  return children;
};

export default PrivateRoutes;
