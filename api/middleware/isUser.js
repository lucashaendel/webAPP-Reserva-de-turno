const { validateToken } = require("../config/token");

const isUser = async (req, res, next) => {
  const token = req.cookies.token;
  const payload = validateToken(token);
  console.log(payload);
  if (payload.role === "user" || "admin") return next();
  else {
    res.status(403).send("You don't have permission to view this page");
  }
};

module.exports = isUser;
