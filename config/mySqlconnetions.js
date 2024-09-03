const mysql = require("mysql");
const util = require("util");
const nodeEnvConfig = require("../nodeEnvConfig");
nodeEnvConfig.envConfig();

const mysqlConnections = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "admin@123",
  database: "bb_budget",
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true,
});

mysqlConnections.query = util.promisify(mysqlConnections.query);

mysqlConnections.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  } else {
    console.log(
      `Connected to the database "bb_budget" in "${process.env.DB_HOST}" with user "${process.env.DB_USERNAME}" successfully!`
    );
    connection.release();
  }
});

mysqlConnections.on("error", (err) => {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("Database connection was closed.");
  }
  if (err.code === "ER_CON_COUNT_ERROR") {
    console.error("Database has too many connections.");
  }
  if (err.code === "ECONNREFUSED") {
    console.error("Database connection was refused.");
  }
});

module.exports = mysqlConnections;
