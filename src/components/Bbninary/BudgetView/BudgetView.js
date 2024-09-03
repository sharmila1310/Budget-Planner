import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routePath from "../../../routes/routePath";
import { getBudgetList } from "../../../services/budgetViewServices";

const BudgetView = () => {
  const [budgetListApi, setBudgetList] = useState([]);
  console.log("budgetListApi", budgetListApi);

  useEffect(() => {
    getBudgetList()
      .then((res) => {
        if (res.status == 200 && res.data) setBudgetList(res.data.viewData);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="budget-view-main">
      <div className="budget-view-body">
        <div className="budget-view">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Department</th>
                <th>Practice Name</th>
                <th>Const Center Owner</th>
                <th>Project Name</th>
                <th>Customer Type</th>
                <th>Customer</th>
              </tr>
            </thead>
            <tbody>
              {budgetListApi?.map()}
              <tr>
                <td>IN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetView;
