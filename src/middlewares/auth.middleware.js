const { verifyAccessToken } = require("../utils/jwt.js");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      const userId = verifyAccessToken(token);
      if (userId) {
        req.userId = userId.userId;
        next();
      }
    }
  } else {
    res.status(401).json("Token is not defined");
  }
}

module.exports = authMiddleware;