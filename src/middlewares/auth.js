const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from the req cookies
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please login");
    }

    // Validate the token
    const decodedObj = await jwt.verify(token, "DEV@Tinder#123");

    // Find the user
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

// // Handle Auth Middleware for all GET, POST, ... requests
// const adminAuth = (req, res, next) => {
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   // Check if the request is authorized
//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// };

// const userAuth = (req, res, next) => {
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz";
//     // Check if the request is authorized
//     if (!isAdminAuthorized) {
//       res.status(401).send("Unauthorized request");
//     } else {
//       next();
//     }
//   };

module.exports = {
  userAuth,
};
