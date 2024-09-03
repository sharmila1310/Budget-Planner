const mysqlConnection = require("../config/mySqlconnection");
const nodeEnvConfig = require("../nodeEnvConfig");
nodeEnvConfig.envConfig();
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Import service functions
const {
  getDepartmentFilterService,
  getPraticeFilterService,
  getCustomerFilterService,
  addBudgetDataService,
  updateBudgetDataService,
  viewBudgetDataService,
} = require("../service/budgetappservice");
const { CLIENT_RENEG_LIMIT } = require("tls");

/**
 * Controller to get tickets assigned to the user ID (Tickets Assigned to me)
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const getDepartmentName = async (req, res) => {
  try {
    const department = await getDepartmentFilterService();
    return res.status(200).json({ statusCode: 200, success: true, department });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

const getPraticeName = async (req, res) => {
  try {
    const { id } = req.query;
    const practice = await getPraticeFilterService(id);
    return res.status(200).json({ statusCode: 200, success: true, practice });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

const getCustomerName = async (req, res) => {
  try {
    const customer = await getCustomerFilterService();
    return res.status(200).json({ statusCode: 200, success: true, customer });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

const addBudgetData = async (req, res) => {
  try {
    const data = req.body;
    const tickets = await addBudgetDataService(data);
    return res.status(200).json({ statusCode: 200, success: true, tickets });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

const viewBudgetData = async (req, res) => {
  try {
    const data = req.body;
    const viewData = await viewBudgetDataService();
    return res.status(200).json({ statusCode: 200, success: true, viewData });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

const updateBudgetData = async (req, res) => {
  try {
    const { data } = req.query;
    const tickets = await updateBudgetDataService(data);
    return res.status(200).json({ statusCode: 200, success: true, tickets });
  } catch (err) {
    console.error("Error getting department:", err);
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please try later.",
      err,
    });
  }
};

// Export controller methods
module.exports = {
  getDepartmentName,
  getPraticeName,
  getCustomerName,
  addBudgetData,
  updateBudgetData,
  viewBudgetData,
};
