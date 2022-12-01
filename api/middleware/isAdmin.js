const { validateToken } = require("../config/token");

const isAdmin = async (req, res, next) => {
  const token = req.cookies.token;
  const payload = validateToken(token);
  if (payload.role === "admin") return next();
  else {
    res.status(403).send("You don't have permission to view this page");
  }
};

module.exports = isAdmin;
