const express = require("express");
const fs = require("fs");
const multer = require("multer");
const budgetAppRouter = express.Router();
const budgetAppController = require("../controller/budgetappcontroller");
const auth = require("../middleware/authentication");

// Getting assigned tickets

budgetAppRouter.get(
  "/department-filter",
  budgetAppController.getDepartmentName
);

budgetAppRouter.get("/practice-filter", budgetAppController.getPraticeName);

budgetAppRouter.get("/customer-filter", budgetAppController.getCustomerName);

budgetAppRouter.post("/add-budgetData", budgetAppController.addBudgetData);

budgetAppRouter.get("/update-budgetData", budgetAppController.updateBudgetData);

budgetAppRouter.get("/view-budgetData", budgetAppController.viewBudgetData);

module.exports = budgetAppRouter;
