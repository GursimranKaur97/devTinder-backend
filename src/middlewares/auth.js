// Handle Auth Middleware for all GET, POST, ... requests
const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  // Check if the request is authorized
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    // Check if the request is authorized
    if (!isAdminAuthorized) {
      res.status(401).send("Unauthorized request");
    } else {
      next();
    }
  };
  

module.exports = {
  adminAuth,
  userAuth
};
