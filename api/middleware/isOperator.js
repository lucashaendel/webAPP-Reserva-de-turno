const { validateToken } = require("../config/token");

const isOperator = async (req, res, next) => {
  const token = req.cookies.token;
  const payload = validateToken(token);
  console.log("Im next");
  if (payload.role === "operator" || "admin") return next();
  else {
    res.status(403).send("You don't have permission to view this page");
  }
};

module.exports = isOperator;
