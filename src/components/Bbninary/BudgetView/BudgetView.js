import React from "react";
import { Link } from "react-router-dom";
import routePath from "../../../routes/routePath";

const BudgetView = () => {
  return (
    <div className="budget-view">
      <p>Budget has been saved</p>
      <Link to={routePath.root}>Back</Link>
    </div>
  );
};

export default BudgetView;
