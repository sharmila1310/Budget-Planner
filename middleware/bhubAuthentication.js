const mysqlConnection = require("../config/mySqlconnection");
const jwt = require("jsonwebtoken");

const CryptoJS = require("crypto-js");
const nodeEnvConfig = require("../nodeEnvConfig");
nodeEnvConfig.envConfig();
const encryptionSecrets = {
  TOKEN: process.env.ENCRYPTION_SECRET_TOKEN,
};
const secretKeyModules = {
  TOKEN: "TOKEN",
};

const auth = (req, res, next) => {
  try {
    console.log("hiii");
    const skipCheck = !req.originalUrl?.includes("login");
    const isLogout = req.originalUrl?.includes("logout");
    // Skipping token validation for login and OPTIONS method call (Options method will check for cross-origin)
    if (skipCheck && req.method !== "OPTIONS") {
      let header = req.headers["authorization"];
      if (!header) {
        console.log("Header authorization is not present");
        return res.status(401).json({
          statusCode: 401,
          status: res.status,
          message:
            "Authentication failed. Authorization header is missing or invalid.",
        });
      }
      if (!header.startsWith("Bearer ")) {
        console.log("Header authorization doesn't start with bearer");
        return res.status(401).json({
          statusCode: 401,
          status: res.status,
          message:
            "Authentication failed. Bearer is missing or misspelled in the provided token.",
        });
      }

      let token = header.replace("Bearer ", "");
      console.log("token", token);

      verifyToken(req, token, (decodedToken) => {
        if (!decodedToken) {
          return res.status(401).json({
            statusCode: 401,
            status: res.status,
            message: "Authentication failed. Invalid token.",
          });
        }

        let userId = decodedToken?.userId ? decodedToken.userId : "";
        req.user = decodedToken;
        console.log("User id from the token: ", userId);

        findUser(userId, (userDetails) => {
          validateToken(
            isLogout,
            userDetails,
            token,
            decodedToken,
            req,
            res,
            next
          );
        });
      });
    } else {
      req.user = null;
      next();
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      statusCode: 500,
      status: 0,
      message: "Something went wrong. Please try again later.",
      err: "Authorization is required.",
    });
  }
};

const validateToken = (
  isLogout,
  userDetails,
  token,
  decodedToken,
  req,
  res,
  next
) => {
  if (
    userDetails?.token != null &&
    decryptData(userDetails?.token, secretKeyModules?.TOKEN) === token
  ) {
    req.headers["authorizedUser"] = JSON.stringify(decodedToken);
    // Continue to the next middleware or route handler
    next();
  } else {
    return res.status(401).json({
      statusCode: 401,
      status: 0,
      message:
        "Authentication failed. User details not found or token mismatch.",
    });
  }
};
const verifyToken = (req, token, callback) => {
  try {
    console.log(`Token `);
    if (!token || typeof token !== "string") {
      throw new Error("Token is missing or invalid.");
    }

    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    req.token = token;

    console.log("Token verified");
    if (decode) {
      callback(decode);
    } else {
      callback(false);
    }
  } catch (e) {
    console.log("Decoded token error: ", e.message);
    callback(false);
  }
};

const findUser = (userId, callback) => {
  try {
    let query = `SELECT id, token FROM main_users WHERE id='${userId}' AND isactive = 1`;
    mysqlConnection.query(query, (err, rows) => {
      if (!err) {
        console.log(`User ${userId} is in the database`, rows[0]);
        callback(rows[0]);
      } else {
        console.log("Error while checking for user in the database - ", err);
        callback(null);
      }
    });
  } catch (e) {
    callback(null);
  }
};

const decryptData = (text, module) => {
  console.log("Decrypting data:"); // Log the encrypted text

  // Check if the text is null or undefined
  if (text === null || text === undefined) {
    console.error("Encrypted text is null or undefined");
    return null; // or handle the error
  }

  const selectedEncryptionSecret = encryptionSecrets[module];
  // Ensure that selectedEncryptionSecret is not null or undefined
  if (
    selectedEncryptionSecret === null ||
    selectedEncryptionSecret === undefined
  ) {
    console.error("Encryption secret is null or undefined");
    return null; // or handle the error
  }

  // Perform decryption
  try {
    const decryptedText = CryptoJS.AES.decrypt(
      text,
      selectedEncryptionSecret
    ).toString(CryptoJS.enc.Utf8);
    console.log("Decrypted text:"); // Log the decrypted text
    return decryptedText;
  } catch (error) {
    console.error("Decryption error:", error);
    return null; // or handle the decryption error
  }
};

module.exports = {
  auth,
  findUser,
  verifyToken,
};
